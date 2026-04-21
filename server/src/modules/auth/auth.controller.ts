import * as authService from './auth.service'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await authService.loginUser(req.body)
        res.json(data)
    } catch (error) {
        console.log("error occured while login", error)
        next(error)
    }
}

export const refreshToken = async (req: Request, res: Response) => {
    const { token } = req.body;

    if (!token) return res.status(401).json({ message: 'No token' })

    try {
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string)
        const tokens = authService.generateToken(decoded.id)

        res.json(tokens)
    } catch (error) {
        console.log("error occured on refreshToken", error)
        res.status(403).json({ message: 'Invalid refresh token' })
    }
}