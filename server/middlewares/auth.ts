import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

const protect = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'You are not logged in' });
    }
    try {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({ message: 'You are not logged in' });
    }
};

export default protect;