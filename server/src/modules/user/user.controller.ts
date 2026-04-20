import * as userService from './user.service';

export const registerUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body)
        res.send(200).json(user)
    } catch (error) {
        console.log("error occured while registering user: ", error)
        next()
    }
}

export const loginUser = async (req, res, next) => {
    try {
        console.log("functionality of a login here......")
    } catch (error) {
        console.log("error occured whilt login user: ".error)
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {

        console.log("functionality of a getUser here.......")
    } catch (error) {
        console.log("error occured while getUser: ", error)
        next(error)
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUser()
        res.send(users)
    } catch (error) {
        console.log("error occured while getUser: ", error)
        next(error)
    }
}