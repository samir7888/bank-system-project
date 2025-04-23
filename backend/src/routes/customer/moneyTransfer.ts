const Router = require("express");
const moneyTransferRouter = Router();
import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { authMiddleware } from "../authMiddleware";
const prisma = new PrismaClient();

moneyTransferRouter.post(
  "/moneyTransfer", 
  authMiddleware, 
  async (req: Request, res: Response) => {
    try {
      const from = req.body.user.user.id;
      const { to, amount } = req.body;

      if (!from) {
        return res.status(400).json({
          message: "Error while sending"
        });
      }

      // Convert amount to number to fix the increment type issue
      const numericAmount = Number(amount);

      if (isNaN(numericAmount) || numericAmount <= 0) {
        return res.status(400).json({
          message: "Invalid amount"
        });
      }

      const toUser = await prisma.user.findFirst({
        where: {
          number: to 
        }
      });

      if (!toUser) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      await prisma.$transaction(async (tx) => {
        // Make sure from is a number when used in the query
        const fromUserId = Number(from);
        
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${fromUserId} FOR UPDATE`;

        const fromBalance = await tx.balance.findUnique({
          where: { userId: fromUserId },
        });
        
        if (!fromBalance || fromBalance.amount < numericAmount) {
          throw new Error('Insufficient funds');
        }

        await tx.balance.update({
          where: { userId: fromUserId },
          data: { amount: { decrement: numericAmount } },
        });

        await tx.balance.update({
          where: { userId: toUser.id },
          data: { amount: { increment: numericAmount } },
        });

        await tx.p2pTransfer.create({
          data: {
            fromUserId: fromUserId,
            toUserId: toUser.id,
            amount: numericAmount,
            timestamp: new Date()
          }
        });
        
        res.status(200).json({ message: "Money transferred successfully" });
      });
    } catch (error:unknown) {
      console.error("Transfer error:", error);
      res.status(500).json({message: "An error occurred during transfer" });
    }
  }
);

export default moneyTransferRouter;