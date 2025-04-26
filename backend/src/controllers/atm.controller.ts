import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();


// Withdraw function to handle ATM withdrawal requests
export const withdraw = async (req: Request, res: Response) => {

  let { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
    res.status(400).json({ error: "Invalid amount" });
    return;
  }
  if (amount % 10 !== 0) {
    res.status(400).json({ error: "Amount must be a multiple of 10" });
    return;
  }
  if (amount > 10000) {
    res.status(400).json({ error: "Amount exceeds limit of रु 10,000" });
    return;
  }

  const userId = (req as any).user.id;
  const denominations = [1000, 500, 100, 50, 20, 10];
  const result: { [denomination: number]: number } = {};
  let originalAmount = amount;

  try {
    const transactionResult = await prisma.$transaction(async (tx) => {
      const balance = await tx.balance.findUnique({
        where: { userId },
      });

      if (!balance) {
        throw new Error("User not found");

      }

      if (!balance.amount || balance.amount < originalAmount) {
        throw new Error("Insufficient balance");

      }

      // Dispense logic (note: this doesn't interact with DB but kept for consistency)
      for (let note of denominations) {
        const count = Math.floor(amount / note);
        if (count > 0) {
          result[note] = count;
          amount -= count * note;
        }
      }

      if (amount !== 0) {
        throw new Error(`Cannot dispense exact amount (₹${originalAmount}) with available denominations`);
      }

      // Decrement balance atomically
      await tx.balance.update({
        where: { userId },
        data: {
          amount: {
            decrement: Number(originalAmount),
          },
        },
      });


    });

    res.status(200).json({
      message: "Withdrawal successful",
      notes: result,
    });

  } catch (error: any) {
    console.error("Transaction error:", error);
    res.status(400).json({
      error: error.message || "Internal server error",
    });
  }
}

