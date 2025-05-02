import { PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";
import { checkFraudChain } from "../services/fraudCheck";
const prisma = new PrismaClient();

export const fraudCheckRoute = async (req: Request, res: Response) => {
  const { senderId } = req.params;

  if (!senderId) {
     res.status(400).json({ error: "senderId is required" });
     return;
  }

  try {
    const fraudPath = await checkFraudChain(Number(senderId));

    if (fraudPath) {
      // Freeze all users involved in the fraud path
      await prisma.user.updateMany({
        where: { id: { in: fraudPath.map(id => id) } },
        data: { isFrozen: true },
      });

       res.status(200).json({
        message: "⚠️ Fraud detected. Accounts frozen.",
        fraudChain: fraudPath,
      });
      return;
    }

    res.status(200).json({ message: "✅ No fraud detected." });
    return;
  } catch (error) {
    console.error("Fraud check error:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
