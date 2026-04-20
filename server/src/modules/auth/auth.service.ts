import User from "../user/user.model";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const loginUser = async ({ email, password }: any) => {
    const user = await User.findOne({ email })
    if (!user) throw new Error("No user found with this email.");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Incorrect password!')

    const token = generateToken(user._id)

    return (user, token)
}

export const generateToken = async (userId: string) => {
    const accessToken = jwt.sign(
        { id: userId },
        process.env.JWR_SECRET as string,
        { expiresIn: '1d' }
    );

    const refreshToken = jwt.sign(
        { id: userId },
        process.env.JWT_REFRESH_SECRET as string,
        { expiresIn: '7d' }
    )

    return { accessToken, refreshToken }
}