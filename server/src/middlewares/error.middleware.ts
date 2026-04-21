import { NextFunction, Request, Response } from "express";

const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    let message = "Server Error"

    // checking if err is a standard JavaScript Error object before accessing its properties
    if (err instanceof Error) {
        message = err.message
    }
    res.status(500).json({
        success: false,
        message
    })
}

export default errorMiddleware;