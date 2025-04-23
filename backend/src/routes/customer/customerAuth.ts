import  bcrypt  from 'bcrypt';
const jwt = require('jsonwebtoken');
import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
const Router = require("express");
const customerRouter = Router();
const client = new PrismaClient();

//login
customerRouter.post('/login',async (req: Request, res: Response) => {
    const {phone,password} = req.body;
    if ( !phone || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    if (phone.length !== 10 || isNaN(Number(phone))) {
        return res.status(400).json({ error: "Invalid phone number" });
    }
    // if (password.length < 6) {
    //     return res.status(400).json({ error: "Password must be at least 6 characters long" });
    // }
    try {
        const user = await client.user.findUnique({ where: { number: phone } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }
        const token = jwt.sign({user},"12345")
        res.status(200).json({ message: "Login successful",token, user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default customerRouter;