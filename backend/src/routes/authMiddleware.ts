import { Request, Response, NextFunction } from "express";

const jwt = require('jsonwebtoken');
interface AuthenticatedRequest extends Request {
    headers: {
        authorization?: string;
        [key: string]: any;
    };
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Assuming the token is in the format
    const decode =  jwt.verify(token,"12345");
    req.body.user = decode;
    next();
};