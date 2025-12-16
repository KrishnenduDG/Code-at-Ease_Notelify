import { Router } from "express";
import AuthController from "../controller/auth.js";

const authRouter = new Router();

authRouter.post("/signup", AuthController.handleSignup);

authRouter.post("/login", AuthController.handleLogin);

export default authRouter;
