import { Request, Response } from "express";
import { checkFraudCycle } from "../services/fraudCheck";
import {
  sendFraudAlertEmail,
  sendSucceedOfflineTransactionEmailToReceiver,
  sendSucceedOfflineTransactionEmailToSender,
} from "../services/email";

import { prisma } from "../db";

export const transfer = async (req: Request, res: Response): Promise<void> => {
  try {
    const from = (req as any).user.id;
    const sender = await prisma.user.findUnique({
      where: {
        id: from,
      },
    });

    const senderEmail = sender?.email;
    const senderName = sender?.name;
    const { to, amount } = req.body;
    if (!from) {
      res.status(400).json({
        message: "sender user ID is required",
      });
      return;
    }

    const isFrozen = await prisma.user.findUnique({ where: { id: from } });

    if (isFrozen.isFrozen) {
      res.status(400).json({
        message: "Your account is frozen, You cannot send money",
      });
      return;
    }

    // Convert amount to number to fix the increment type issue
    const numericAmount = Number(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      res.status(400).json({
        message: "Invalid amount",
      });

      return;
    }

    const toUser = await prisma.user.findFirst({
      where: {
        number: to,
      },
    });
    if (!toUser) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    if (from === toUser.id) {
      res.status(400).json({
        message: "cannot send money to yourself",
      });
    }

    interface FraudChainResult {
      fraudChain: number[] | null;
    }

    await prisma.$transaction(
      async (tx) => {
        // Make sure from is a number when used in the query
        const fromUserId: number = Number(from);
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${fromUserId} FOR UPDATE`;

        const fromBalance: { amount: number } | null =
          await tx.balance.findUnique({
            where: { userId: fromUserId },
          });
        if (!fromBalance || fromBalance.amount < numericAmount) {
          res.status(400).json({ message: "Insufficient funds" });
          throw new Error("Insufficient funds");
        }

        await tx.balance.update({
          where: { userId: fromUserId },
          data: { amount: { decrement: numericAmount } },
        });

        await tx.balance.update({
          where: { userId: toUser.id as number },
          data: { amount: { increment: numericAmount } },
        });

        await tx.p2pTransfer.create({
          data: {
            fromUserId: fromUserId,
            toUserId: toUser.id as number,
            amount: numericAmount,
            timestamp: new Date(),
          },
        });
        // Run fraud check after transaction
        const fraudChain: number[] | null = await checkFraudCycle(fromUserId);

        if (fraudChain) {
          await prisma.user.updateMany({
            where: { id: { in: fraudChain.map((id: number) => id) } },
            data: { isFrozen: true },
          });
          await sendFraudAlertEmail(fromUserId, fraudChain);
          return res.status(200).json({
            message:
              "⚠️ Transfer completed, but fraud detected. Involved accounts frozen and admin notified",
            fraudChain,
          });
        } else {
          await sendSucceedOfflineTransactionEmailToSender(
            senderEmail,
            toUser.name,

            numericAmount
          );
          await sendSucceedOfflineTransactionEmailToReceiver(
            toUser.email,
            senderName,

            numericAmount
          );
        }

        res.status(200).json({
          message: "Money transferred successfully, No fraud detected",
        });
      },
      { timeout: 30000 }
    );
  } catch (error: unknown) {
    console.error("Transfer error:", error);
    res.status(500).json({ message: "An error occurred during transfer" });
  }
};

export const getTransactionHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const skip = (page - 1) * limit;
    const userId = (req as any).user.id;
    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }
    const transactions = await prisma.p2pTransfer.findMany({
      where: {
        OR: [{ fromUserId: userId }, { toUserId: userId }],
      },
      include: {
        fromUser: {
          select: {
            number: true,
          },
        },
        toUser: {
          select: {
            number: true,
          },
        },
      },
      orderBy: {
        timestamp: "desc",
      },
      skip,
      take: limit,
    });
    const total = await prisma.p2pTransfer.count();
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;
    res.status(200).json({
      data: transactions,
      meta: {
        total,
        page,
        limit,
        hasNextPage,
        hasPreviousPage,
      },
    });
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    res.status(500).json({
      message: "An error occurred while fetching transaction history",
    });
  }
};
