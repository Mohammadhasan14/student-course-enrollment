import dotenv from 'dotenv';
import { connectDB } from './src/config/db';
import app from './app'

dotenv.config()
const PORT = process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running successfully on port: ", PORT)
    })
})