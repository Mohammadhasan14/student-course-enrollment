import { Request, Response, NextFunction } from 'express';
import * as userService from './user.service';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.createUser(req.body)
        res.send(200).json(user)
    } catch (error) {
        console.log("error occured while registering user: ", error)
        next()
    }
}

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("functionality of a login here......")
    } catch (error) {
        console.log("error occured whilt login user: ", error)
        next(error)
    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        console.log("functionality of a getUser here.......")
    } catch (error) {
        console.log("error occured while getUser: ", error)
        next(error)
    }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getAllUser()
        res.send(users)
    } catch (error) {
        console.log("error occured while getUser: ", error)
        next(error)
    }
}