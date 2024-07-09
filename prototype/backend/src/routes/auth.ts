import express from "express";
const authRouter=express.Router();
import { signupHandler,signinHandler} from "../controllers/authHandler";


authRouter.post("/signup",signupHandler);
authRouter.post("/signin",signinHandler);


export default authRouter;
