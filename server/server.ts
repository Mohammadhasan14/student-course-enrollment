import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import app from './app.js';

dotenv.config()
const PORT = process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running successfully on port: ", PORT)
    })
})