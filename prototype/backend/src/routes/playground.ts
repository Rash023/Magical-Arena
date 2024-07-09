import express from "express";
const playgroundRouter=express.Router();
import { startGame, updateStats} from "../controllers/playgroundHandler";

playgroundRouter.post("/start",startGame);
playgroundRouter.post("/update",updateStats);


export default playgroundRouter;