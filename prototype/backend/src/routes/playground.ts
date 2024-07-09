import express from "express";
const playgroundRouter=express.Router();
import { diceHandler } from "../controllers/playgroundHandler";

playgroundRouter.get("/roll",diceHandler);


export default playgroundRouter;