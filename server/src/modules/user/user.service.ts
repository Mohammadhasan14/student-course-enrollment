import bcrypt from 'bcryptjs'
import UserModel from './user.model'

export const createUser = async (data: any) => {
    const existingUser = await UserModel.findOne({ email: data.email })

    if (existingUser) throw new Error("User already exist with this email.")

    const hashPassword = await bcrypt.hash(data.password, 10);

    const user = await UserModel.create({
        ...data,
        password: hashPassword,
    });

    return user;
}

export const getUser = async (data: any) => {
    return await UserModel.findOne({ email: data.email })
}

export const getAllUser = async () => {
    return await UserModel.find().select('-password');
}