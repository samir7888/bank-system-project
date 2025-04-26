import express from "express";
// import { authMiddleware } from "../middlewares/authMiddleware";
import { withdraw } from "../controllers/atm.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const atmRoutes = express.Router();

atmRoutes.post("/withdraw", authMiddleware, withdraw);



export default atmRoutes;
