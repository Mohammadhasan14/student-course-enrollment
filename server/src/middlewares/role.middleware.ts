import { NextFunction, Response } from "express"
import { AuthRequest } from "../types/global.types"

export const authorize = (...roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {

        if (!roles.includes(req?.user?.role)) {
            return res.status(403).json({ message: "Forbidden" })
        }
        next()
    }
}