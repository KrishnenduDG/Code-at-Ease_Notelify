import { Router } from "express";

const authRouter = new Router();

authRouter.post("/signup", (req, res) => {
  res.json({ status: true, msg: "Signup Route" });
});

authRouter.post("/login", (req, res) => {
  res.status(200).json({ status: true, msg: "Login Route" });
});

export default authRouter;
