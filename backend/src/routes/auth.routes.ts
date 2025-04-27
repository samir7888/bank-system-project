import express from "express";
import { login, me, requestOtp, verifyOtp } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const authRoutes = express.Router();

authRoutes.post("/login", login); 
authRoutes.get("/me",authMiddleware, me); 
authRoutes.post("/request-otp", requestOtp); 
authRoutes.post("/verify-otp", verifyOtp); 



export default authRoutes;
