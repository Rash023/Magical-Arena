import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided!' });
    }

    try {
        const decoded:any= jwt.verify(token, process.env.JWT_SECRET || "");
        if(!decoded){
            return res.status(411).json({message:"Unauthorized user!"})
        }
        next(); 
    } catch (error) {
        return res.status(400).json({ message: 'Invalid Token!' });
    }
};
