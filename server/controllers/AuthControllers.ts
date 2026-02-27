import { Request, Response } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: '/'
        });

        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
        
        return res.json({ message: 'Account created successfully', user: { _id: newUser._id, name: newUser.name, email: newUser.email } });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        const isCorrect = await bcrypt.compare(password, user.password);
        if (!isCorrect) return res.status(400).json({ message: 'Invalid email or password' });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: '/'
        });

        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

        return res.json({ message: 'Login successful', user: { _id: user._id, name: user.name, email: user.email } });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const logoutUser = async (req: Request, res: Response) => {
    res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'none', path: '/' });
    return res.json({ message: 'Logout successful' });
};

export const verifyUser = async (req: Request, res: Response) => {
    try {
        const token = req.cookies?.token;
        if (!token) return res.status(401).json({ message: 'You are not logged in' });

        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        const user = await User.findById(decoded.userId).select('-password');
        if (!user) return res.status(400).json({ message: 'Invalid user' });

        return res.json({ user });
    } catch (error: any) {
        res.status(401).json({ message: 'You are not logged in' });
    }
};