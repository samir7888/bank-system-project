// src/routes/emergencyCredit.routes.ts
import express, { Request, Response } from "express";
import { prisma } from "../db";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  sendSucceedOfflineTransactionEmailToReceiver,
  sendSucceedOfflineTransactionEmailToSender,
} from "../services/email";

const EmergencyRouter = express.Router();

//route to create a maintenance alert
EmergencyRouter.post(
  "/maintenance-alert",
  async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);
    const { title, description, type, startTime, endTime } = req.body;

    if (!title || !description || !type || !startTime || !endTime) {
      res.status(400).json({ message: "All fields are required." });
      return;
    }

    try {
      const start = new Date(startTime);
      const end = new Date(endTime);
      const now = new Date();

      // Validate startTime is >= now
      if (start < now) {
        res
          .status(400)
          .json({ message: "Start time must be in the future or now." });
        return;
      }

      // Validate endTime is > startTime
      if (end <= start) {
        res.status(400).json({ message: "End time must be after start time." });
        return;
      }

      // Check for overlapping alerts of the same type
      const overlappingAlert = await prisma.maintenanceAlert.findFirst({
        where: {
          type,
          OR: [
            {
              startTime: {
                lte: end,
              },
              endTime: {
                gte: start,
              },
            },
          ],
        },
      });

      if (overlappingAlert) {
        res
          .status(400)
          .json({
            message:
              "An overlapping maintenance alert already exists for this type.",
          });
        return;
      }

      const alert = await prisma.maintenanceAlert.create({
        data: {
          title,
          description,
          type,
          startTime: start,
          endTime: end,
        },
      });

      res.status(201).json({ message: "Maintenance alert created.", alert });
    } catch (err) {
      console.error("Error creating maintenance alert:", err);
      res.status(500).json({ message: "Internal server error", detail: err });
    }
  }
);

//Route to check the status of emergency wallet
EmergencyRouter.get(
  "/maintenance-alert/status",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const alerts = await prisma.maintenanceAlert.findMany();
      res.json({ hasMaintenanceAlert: alerts.length > 0 });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Claim emergency credit only if there's an active maintenance alert
EmergencyRouter.post(
  "/claim",
  authMiddleware,
  async (req: Request, res: Response): Promise<void> => {
    const userId = (req as any).user.id;

    try {
      const now = new Date();

      const activeMaintenance = await prisma.maintenanceAlert.findFirst({
        where: {
          type: "OnlineBanking",
          endTime: { gte: now },
        },
      });

      if (!activeMaintenance) {
        res
          .status(403)
          .json({
            message:
              "No active maintenance. Emergency credit is not available.",
          });
        return;
      }

      const existingCredit = await prisma.emergencyCredit.findFirst({
        where: { userId, isUsed: false, expiresAt: { gte: now } },
      });

      if (existingCredit) {
        res
          .status(400)
          .json({ message: "Emergency credit already claimed and active." });
        return;
      }

      const userBalance = await prisma.balance.findUnique({
        where: { userId },
      });

      if (!userBalance || userBalance.amount <= 1000) {
        res.status(400).json({ message: "Balance must be greater than 1000" });
        return;
      }

      const expiresAt = activeMaintenance.endTime;

      const credit = await prisma.emergencyCredit.create({
        data: {
          userId,
          amount: 1000,
          expiresAt,
        },
      });

      res.status(201).json({ message: "Emergency credit granted.", credit });
    } catch (err) {
      console.error("Error during emergency credit claim:", err);
      res.status(500).json({ error: "Internal server error", detail: err });
    }
  }
);

// Settle emergency credit after downtime
EmergencyRouter.post(
  "/settle",
  authMiddleware,
  async (req: Request, res: Response): Promise<void> => {
    const { userId, amountSpent } = req.body;
    console.log("user", (req as any).user);
    const from = (req as any).user.id;
    // const receiverID = Number(userId);

    try {
      const sender = await prisma.user.findUnique({
        where: {
          id: from,
        },
      });

      const senderEmail = sender?.email;
      const senderName = sender?.name;
      console.log(senderEmail);
      const toUser = await prisma.user.findFirst({
        where: {
          number: userId,
        },
      });
      if (!toUser) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      await prisma.maintenanceAlert.deleteMany();
      interface EmergencyCredit {
        id: number;
        userId: number;
        amount: number;
        expiresAt: Date;
        isUsed: boolean;
      }

      interface User {
        id: number;
        name: string | null;
        email: string | null;
        number: string;
      }

      interface Balance {
        userId: number;
        amount: number;
      }

      await prisma.$transaction(async (tx) => {
        const credit: EmergencyCredit | null =
          await tx.emergencyCredit.findFirst({
            where: { userId: from },
          });

        if (!credit) {
          res
            .status(404)
            .json({ message: "No active emergency credit found." });
          throw new Error("No active emergency credit");
        }

        if (amountSpent > credit.amount) {
          res
            .status(400)
            .json({ message: "Spent amount exceeds emergency credit." });
          throw new Error("Spent amount exceeds limit");
        }

        // Deduct from sender and credit to receiver atomically
        await tx.emergencyCredit.update({
          where: { id: credit.id },
          data: { isUsed: true },
        });

        await tx.balance.update({
          where: { userId: from },
          data: { amount: { decrement: Number(amountSpent) } },
        });

        await tx.balance.update({
          where: { userId: toUser.id },
          data: { amount: { increment: Number(amountSpent) } },
        });
      });
      await sendSucceedOfflineTransactionEmailToSender(
        senderEmail || "",
        toUser.name || "",
        Number(amountSpent)
      );
      await sendSucceedOfflineTransactionEmailToReceiver(
        toUser.email || "",
        senderName || "",
        Number(amountSpent)
      );

      res.json({
        message: "Emergency credit settled and mail sent successfully",
      });
    } catch (err) {
      console.error("Error during emergency credit settlement:", err);
      res.status(500).json({ error: "Internal server error", detail: err });
    }
  }
);

// Get emergency credit status
EmergencyRouter.get("/status/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const credit = await prisma.emergencyCredit.findFirst({
      where: { userId: parseInt(userId), expiresAt: { gte: new Date() } },
    });

    res.json({ hasCredit: !!credit, credit });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//to check user is offline
EmergencyRouter.get(
  "/maintenance/active",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const now = new Date();
      const activeAlert = await prisma.maintenanceAlert.findFirst({
        where: {
          startTime: { lte: now },
          endTime: { gte: now },
        },
      });
      res.json({ isActive: !!activeAlert });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

//to check user is online
EmergencyRouter.get(
  "/maintenance/inactive",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const now = new Date();
      const activeAlert = await prisma.maintenanceAlert.findFirst({
        where: {
          startTime: { lte: now },
          endTime: { gte: now },
        },
      });

      // Inactive if no active alert
      res.json({ isOffline: !!activeAlert });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default EmergencyRouter;
