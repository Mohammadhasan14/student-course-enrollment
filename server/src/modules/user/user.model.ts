import { Schema, InferSchemaType, model } from 'mongoose';

const userSchema = new Schema({
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

type User = InferSchemaType<typeof userSchema> & {
    createdAt: Date,
    updatedAt: Date
}

export default model<User>('User', userSchema)