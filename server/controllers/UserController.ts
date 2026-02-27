import { Request, Response } from 'express';
import Thumbnail from '../models/Thumbnail.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

const getUserId = (req: Request) => {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token!, JWT_SECRET) as { userId: string };
    return decoded.userId;
}

export const getUsersThumbnails = async (req: Request, res: Response) => {
    try {
        const userId = getUserId(req);
        const thumbnails = await Thumbnail.find({ userId }).sort({ createdAt: -1 });
        res.json({ thumbnails });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getThumbnailbyId = async (req: Request, res: Response) => {
    try {
        const userId = getUserId(req);
        const { id } = req.params;
        const thumbnail = await Thumbnail.findOne({ userId, _id: id });
        res.json({ thumbnail });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};