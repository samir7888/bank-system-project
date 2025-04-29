import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const freezeUser = async (req: Request, res: Response): Promise<void> => {
    const userId = Number(req.params.id);

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        if (user.isFrozen) {
            res.status(400).json({ error: "User is already frozen" });
            return;
        }

        await prisma.user.update({
            where: { id: userId },
            data: { isFrozen: true }
        });

        res.status(200).json({ message: "User account frozen successfully" });
        return;
    } catch (error) {
        console.error("Error freezing user:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
    }
};

export const unfreezeUser = async (req: Request, res: Response): Promise<void> => {
    const userId = Number(req.params.id);

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        if (!user.isFrozen) {
            res.status(400).json({ error: "User is not frozen" });
            return;
        }

        await prisma.user.update({
            where: { id: userId },
            data: { isFrozen: false }
        });

        res.status(200).json({ message: "User account unfrozen successfully" });
        return;
    } catch (error) {
        console.error("Error unfreezing user:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
    }
};
