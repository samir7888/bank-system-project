

import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { checkFraudChain } from "../services/fraudCheck";
import { sendFraudAlertEmail } from "../services/email";
// import { AuthenticatedRequest } from "../middlewares/authMiddleware";

const prisma = new PrismaClient();

export const transfer =
    async (req: Request, res: Response): Promise<void> => {
        try {
           
          
            const from = (req as any).user.id;
            console.log("form id",from)
            const { to, amount } = req.body;
            if (!from) {
                res.status(400).json({
                    message: "sender user ID is required"
                });
                return;
            }

            // Convert amount to number to fix the increment type issue
            const numericAmount = Number(amount);

            if (isNaN(numericAmount) || numericAmount <= 0) {
                res.status(400).json({
                    message: "Invalid amount"
                });

                return;
            }

            const toUser = await prisma.user.findFirst({
                where: {
                    number: to
                }
            });

            if (!toUser) {
                res.status(404).json({
                    message: "User not found"
                });
                return;
            }

            await prisma.$transaction(async (tx) => {
                // Make sure from is a number when used in the query
                const fromUserId = Number(from);

                await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${fromUserId} FOR UPDATE`;

                const fromBalance = await tx.balance.findUnique({
                    where: { userId: fromUserId },
                });
                if (!fromBalance || fromBalance.amount < numericAmount) {
                    res.status(400).json({ message: "Insufficient funds" });
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
                // Run fraud check after transaction
                const fraudChain = await checkFraudChain(fromUserId);

                if (fraudChain) {
                    await prisma.user.updateMany({
                        where: { id: { in: fraudChain.map(id => id) } },
                        data: { isFrozen: true },
                    });
                    await sendFraudAlertEmail(fromUserId, fraudChain);
                    return res.status(200).json({
                        message: "⚠️ Transfer completed, but fraud detected. Involved accounts frozen and admin notified",
                        fraudChain,
                    });
                }
                res.status(200).json({ message: "Money transferred successfully, No fraud detected" });
            }, { timeout: 30000 });
        } catch (error: unknown) {
            console.error("Transfer error:", error);
            res.status(500).json({ message: "An error occurred during transfer" });
        }
    };



export const getTransactionHistory = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user.id // Safely access the user ID
        console.log("history of id ",userId)
        if (!userId) {
            res.status(400).json({ message: "User ID is required" });
            return;
        }
        const transactions = await prisma.p2pTransfer.findMany({
            where: {
                OR: [
                    { fromUserId: userId },
                    { toUserId: userId }
                ]
            },
            include: {
                fromUser: {
                    select: {
                        number: true
                    }
                },
                toUser: {
                    select: {
                        number: true
                    }
                }
            },
            orderBy: {
                timestamp: 'desc'
            }
        });
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error fetching transaction history:", error);
        res.status(500).json({ message: "An error occurred while fetching transaction history" });
    }
}

