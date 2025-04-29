import express from "express";
import { login, me, } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const authRoutes = express.Router();

authRoutes.post("/login", login); 
authRoutes.get("/me",authMiddleware, me); 




export default authRoutes;
