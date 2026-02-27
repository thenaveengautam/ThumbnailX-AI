import express, { Request, Response } from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import connectDB from './configs/db.js';
import AuthRouter from './routes/AuthRoutes.js';
import ThumbnailRouter from './routes/ThumbnailRoutes.js';
import UserRouter from './routes/UserRoutes.js';

await connectDB()

const app = express();

app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',
        'https://thumbnailx.naveengautam.dev'
    ],
    credentials: true
}))

app.set('trust proxy', 1)
app.use(cookieParser())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});
app.use('/api/auth', AuthRouter)
app.use('/api/thumbnail', ThumbnailRouter)
app.use('/api/user', UserRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})