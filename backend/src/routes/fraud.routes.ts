import express from "express";
import { fraudCheckRoute } from "../controllers/fraud.controller";
import { prisma } from '../db';
const fraudRouter = express.Router();

fraudRouter.get("/check/:senderId", fraudCheckRoute);
fraudRouter.post("/dev/seed-fraud", async (req, res) => {
    await prisma.p2pTransfer.createMany({
        data: [
            { fromUserId: 1, toUserId: 2, amount: 500, timestamp: new Date(Date.now() - 2 * 60 * 1000) },
            { fromUserId: 2, toUserId: 3, amount: 500, timestamp: new Date(Date.now() - 1 * 60 * 1000) },
            { fromUserId: 3, toUserId: 4, amount: 500, timestamp: new Date() },
        ],
    });

    res.json({ message: "Fake fraud chain created" });
});


export default fraudRouter;
