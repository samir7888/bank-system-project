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
      secure: false, // set to true if your site uses HTTPS
      sameSite: 'none', // set to 'none' if you want to allow cross-site cookies
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
      where: { userId: user.id },
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
      sameSite: 'strict',
    });
  
    res.status(200).json({ message: "Logout successful" });
  };
  

  export const requestOtp =async (req:Request,res:Response)=> {
    const { email } = req.body;

    // 1. Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return;
    }
  
    // 2. Generate OTP
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
  
    // 3. Save OTP to database
    await prisma.oTP.create({
      data: {
        userId: user.id,
        code: otp,
        expiresAt,
      },
    });
  
    // 4. Send OTP (via email / SMS) -- Here just return for demo
    // TODO: Replace this with nodemailer or SMS sending
    console.log(`OTP for ${email}: ${otp}`);
  
     res.json({ message: 'OTP sent successfully',opt: otp });
     return;

  }

  export const verifyOtp = async (req: Request, res: Response) => {
    const { email, otp } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
     res.status(404).json({ message: 'User not found' });
     return;
  }

  const otpRecord = await prisma.oTP.findFirst({
    where: {
      userId: user.id,
      code: otp,
      verified: false,
      expiresAt: {
        gte: new Date(), // not expired
      },
    },
  });

  if (!otpRecord) {
     res.status(400).json({ message: 'Invalid or expired OTP' });
     return;
  }

  // Mark OTP as verified
  await prisma.oTP.update({
    where: { id: otpRecord.id },
    data: { verified: true },
  });

  // You can now allow the user to proceed (login, register, reset password, etc.)

   res.json({ message: 'OTP verified successfully' });
   return;
  }



