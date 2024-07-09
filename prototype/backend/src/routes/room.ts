import express from "express";
const roomRouter=express.Router();
import { signupHandler,signinHandler} from "../controllers/authHandler";
import { createRoomController, joinRoomController} from "../controllers/roomHandler";
import { authMiddleware } from "../middlewares/authMiddleware";


//route to join the playroom
roomRouter.post("/join",authMiddleware,joinRoomController); 
//route to create the play room
roomRouter.get("/create",createRoomController);


export default roomRouter;
