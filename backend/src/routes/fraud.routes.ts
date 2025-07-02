import express from "express";
import { fraudCheckRoute } from "../controllers/fraud.controller";
import { prisma } from '../db';
const fraudRouter = express.Router();

fraudRouter.get("/check/:senderId", fraudCheckRoute);
fraudRouter.post("/dev/seed-fraud", async (req, res) => {
    await prisma.p2pTransfer.createMany({
        data: [
            { fromUserId: 7, toUserId: 8, amount: 500, timestamp: new Date(Date.now() - 2 * 60 * 1000) },
            { fromUserId: 8, toUserId: 9, amount: 600, timestamp: new Date(Date.now() - 1 * 60 * 1000) },
            { fromUserId: 9, toUserId: 7, amount: 700, timestamp: new Date() },
        ],
    });

    res.json({ message: "Fake fraud chain created" });
});


export default fraudRouter;
