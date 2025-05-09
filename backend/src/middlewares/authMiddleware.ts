import { Request, Response, NextFunction } from "express";

const jwt = require('jsonwebtoken');


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    // const tokenFromHeader = authHeader?.split(" ")[1];
    const tokenFromCookie = req?.cookies?.accessToken; 
    const token =  tokenFromCookie;
  
    if (!token) {
       res.status(401).json({ message: "Unauthorized" });
       return;
    }
  
    try {
        
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("decode",decoded);
      (req as any).user = decoded;
      next();
    } catch (err) {
      console.error(err);
       res.status(401).json({ message: "Invalid or expired token" });
      return;
    }
  };
  