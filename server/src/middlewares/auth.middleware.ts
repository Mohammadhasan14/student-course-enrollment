import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    user?: any
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.header?.authorization?.split('')[1];

        if (!token) {
            res.status(401).json({ message: "Not authorized" })
        }
        const decoded = jwt.verify(token, process.env.JWR_SECRET as string)

        req.user = decoded
        next()

    } catch (error) {
        console.log("error occured on auth middleware: ", error)
        res.status(401).json({ message: "Invalid token" });
    }
}