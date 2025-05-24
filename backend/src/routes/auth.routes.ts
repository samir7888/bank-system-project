import express from "express";
import { login, logout, me, } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const authRoutes = express.Router();

authRoutes.post("/login", login); 
authRoutes.post("/logout", logout); 
authRoutes.get("/me",authMiddleware, me); 




export default authRoutes;
