import express from "express";
import authRouter from "./routes/auth";
import roomRouter from "./routes/room";
import playgroundRouter from "./routes/playground";
import { PrismaClient } from '@prisma/client'
import cookieParser from 'cookie-parser';
import cors from "cors";
const prisma = new PrismaClient()
const PORT=process.env.PORT;
const app=express();
require("./database/database").connect();
app.use(express.json());
app.use(cookieParser());
app.use(cors());



//mount for authentication stuff
app.use("/auth",authRouter);
//mount for playing room
app.use("/room",roomRouter);
//mount for playground actions
app.use("/play",playgroundRouter)


app.listen(PORT,()=>{
    console.log(`Server Running on PORT:${PORT}`);
});