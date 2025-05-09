// src/routes/emergencyCredit.routes.ts
import express, { Request, Response } from 'express';
import { prisma } from '../db';
import { authMiddleware } from '../middlewares/authMiddleware';

const EmergencyRouter = express.Router();

//Route for admin to create a maintenance alert
EmergencyRouter.post('/maintenance-alert', async (req: Request, res: Response): Promise<void> => {
    const { title, description, type, startTime, endTime } = req.body;

    if (!title || !description || !type || !startTime || !endTime) {
        res.status(400).json({ message: 'All fields are required.' });
        return;
    }

    try {
        const start = new Date(startTime);
        const end = new Date(endTime);

        const overlappingAlert = await prisma.maintenanceAlert.findFirst({
            where: {
                type,
                OR: [
                    {
                        startTime: { lte: end },
                        endTime: { gte: start }
                    }
                ]
            }
        });

        if (overlappingAlert) {
            res.status(400).json({ message: 'An overlapping maintenance alert already exists for this type.' });
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

        res.status(201).json({ message: 'Maintenance alert created.', alert });
    } catch (err) {
        console.error('Error creating maintenance alert:', err);
        res.status(500).json({ message: 'Internal server error', detail: err });
    }
});




// Claim emergency credit only if there's an active maintenance alert
EmergencyRouter.post('/claim', authMiddleware, async (req: Request, res: Response): Promise<void> => {
    const userId = (req as any).user.id;

    try {
        const now = new Date();

        const activeMaintenance = await prisma.maintenanceAlert.findFirst({
            where: {
                type: 'OnlineBanking',

                
                // startTime: { lte: now },
                // endTime: { gte: now }
            }
        });
console.log(activeMaintenance)
        if (!activeMaintenance) {
            res.status(403).json({ message: 'No active maintenance. Emergency credit is not available.' });
            return;
        }

        const existingCredit = await prisma.emergencyCredit.findFirst({
            where: { userId, isUsed: false, expiresAt: { gte: now } },
        });

        if (existingCredit) {
            res.status(400).json({ message: 'Emergency credit already claimed and active.' });
            return;
        }

        const expiresAt = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours from now

        const credit = await prisma.emergencyCredit.create({
            data: {
                userId,
                amount: 1000, // or configurable
                expiresAt,
            },
        });

        res.status(201).json({ message: 'Emergency credit granted.', credit });
    } catch (err) {
        console.error("Error during emergency credit claim:", err);
        res.status(500).json({ error: 'Internal server error', detail: err });
    }
});

// Settle emergency credit after downtime
EmergencyRouter.post('/settle', authMiddleware, async (req: Request, res: Response): Promise<void> => {
    const { userId, amountSpent } = req.body;
    const from = (req as any).user.id;
    // const receiverID = Number(userId);

    try {
         const toUser = await prisma.user.findFirst({
                where: {
                    number: userId
                }
            });
         if (!toUser) {
                res.status(404).json({
                    message: "User not found"
                });
                return;
            }
        await prisma.$transaction(async (tx) => {
            const credit = await tx.emergencyCredit.findFirst({
                where: { userId: from, isUsed: false, expiresAt: { gte: new Date() } },
            });

            if (!credit) {
                res.status(404).json({ message: 'No active emergency credit found.' });
                throw new Error('No active emergency credit');
            }

            if (amountSpent > credit.amount) {
                res.status(400).json({ message: 'Spent amount exceeds emergency credit.' });
                throw new Error('Spent amount exceeds limit');
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

        res.json({ message: 'Emergency credit settled.' });
    } catch (err) {
        console.error("Error during emergency credit settlement:", err);
        res.status(500).json({ error: 'Internal server error', detail: err });
    }
});

// Get emergency credit status
EmergencyRouter.get('/status/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const credit = await prisma.emergencyCredit.findFirst({
            where: { userId: parseInt(userId), expiresAt: { gte: new Date() } },
        });

        res.json({ hasCredit: !!credit, credit });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default EmergencyRouter;
