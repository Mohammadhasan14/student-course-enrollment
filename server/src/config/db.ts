import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        console.log("process.env.MONGO_URI", process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected!!")
    } catch (error) {
        console.log("error occured on connectDB", error)
        process.exit(1)
    }
}