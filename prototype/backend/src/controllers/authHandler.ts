import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import user from "../models/user";
dotenv.config();

type Auth = {
    username: string;
    password: string;
};

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function signupHandler(req: { body: Auth }, res: any) {
    const { username, password } = req.body;
    try {
        const existingUser = await user.findOne({ username });
        if (existingUser) {
            return res.status(411).json({ message: "User already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await user.create({ username, password: hashedPassword });

        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: "24h" });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3600000,
        });

        return res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function signinHandler(req: { body: Auth }, res: any) {
    const { username, password } = req.body;
    try {
        const check = await user.findOne({ username });
        if (!check) {
            return res.status(411).json({ message: "User not found!" });
        }

        const passwordMatch = await bcrypt.compare(password, check.password);
        if (!passwordMatch) {
            return res.status(411).json({ message: "Incorrect Password" });
        }

        const token = jwt.sign({ userId: check._id }, JWT_SECRET, { expiresIn: "24h" });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3600000,
            sameSite: "strict",
        });

        return res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        console.error("Error during signin:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
