import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import bcrypt from 'bcrypt';
import { generateOtp } from "../utils/generateOtp";
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();


export const login = async (req: Request, res: Response): Promise<void> => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  if (phone.length !== 10 || isNaN(Number(phone))) {
    res.status(400).json({ error: "Invalid phone number" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { number: phone } });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }

    // 👇 Only include minimal data in JWT payload
    const payload = { id: user.id, phone: user.number };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1h", // optional: token expires in 1 hour
    });

    // 👇 Set token in HTTP-only cookie
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: false, // not https
      sameSite: 'lax', // not none
    });
    

    // 👇 Send minimal info back, no need to send token manually
    res.status(200).json({ message: "Login successful", user: { id: user.id, phone: user.number } });
    return;

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};



// me.ts


export const me = async (req: Request, res: Response): Promise<void> => {
    
  const user = (req as any).user; // or use your AuthenticatedRequest type
console.log(user)
  if (!user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const userBalance = await prisma.balance.findUnique({
      where: { userId: user.id },include:{user:true} // Include user data if needed
    });

    res.status(200).json({
      user,
      
      balance: userBalance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const logout = async (req: Request, res: Response): Promise<void> => {
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: false,  // only over HTTPS
      sameSite: 'lax',
    });
  
    res.status(200).json({ message: "Logout successful" });
  };
  




