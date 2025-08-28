import { Router } from "express";
import { loginController, logoutController, registerController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/logout", logoutController);

export default userRouter;
