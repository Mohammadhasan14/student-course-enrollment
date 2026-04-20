import mongoose from 'mongoose';
import { IUser } from './user.interface';

export interface IUserDocument extends IUser, Document { }

const userSchema = new mongoose.Schema<IUserDocument>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model<IUserDocument>('User', userSchema)