import { Router } from "express";
import { userController } from "../controllers/user-controller.js";

export const userRouter = new Router();

userRouter.post("/user", userController.createUser);
userRouter.get("/user/:id", userController.getOneUser);
userRouter.get("/users", userController.getAllUsers);
userRouter.put("/user", userController.updateUser);
userRouter.delete("/user/:id", userController.deleteUser);
