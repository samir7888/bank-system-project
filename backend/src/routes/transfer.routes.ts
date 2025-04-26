import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getTransactionHistory, transfer } from "../controllers/transfer.controller";

const transferRoutes = express.Router();

transferRoutes.post("/send", authMiddleware, transfer);
transferRoutes.get("/history", authMiddleware, getTransactionHistory);



export default transferRoutes;
