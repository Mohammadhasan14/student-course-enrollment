import express from 'express';
import cors from 'cors';
import userRoutes from './src/modules/user/user.routes'
import authRoutes from './src/modules/auth/auth.routes'
import errorMiddleware from './src/middlewares/error.middleware'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use(errorMiddleware)

app.get('/test', (req, res) => {
    console.log('test api triggered')
    res.send("hi the server is running fine here....")
})

export default app;