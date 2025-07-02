import { Request, Response } from "express";

import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

import { prisma } from '../db';
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, phone, password } = req.body;

  // Require password and at least one of email or phone
  if (!password || (!email && !phone)) {
    res.status(400).json({ error: "Password and either email or phone are required" });
    return;
  }

  // Optional: validate phone if provided
  if (phone && (phone.length !== 10 || isNaN(Number(phone)))) {
    res.status(400).json({ error: "Invalid phone number" });
    return;
  }

  try {
    // Dynamically build where clause
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          ...(email ? [{ email }] : []),
          ...(phone ? [{ number: phone }] : []),
        ],
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }

    const payload = { id: user.id, phone: user.number,role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });

    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });

    res.status(200).json({ message: "Login successful", user: { id: user.id,name:user.name, phone: user.number,role: user.role } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};




// me.ts


export const me = async (req: Request, res: Response): Promise<void> => {
    
  const user = (req as any).user; // or use your AuthenticatedRequest type

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
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });
  
    res.status(200).json({ message: "Logout successful" });
  };
  




