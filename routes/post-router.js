import { Router } from "express";
import { postController } from "../controllers/post-controller.js";

export const postRouter = new Router();

postRouter.post("/post", postController.createPost);
postRouter.get("/post/:id", postController.getOnePost);
postRouter.get("/posts", postController.getAllPosts);
postRouter.put("/post", postController.updatePost);
postRouter.delete("/post/:id", postController.deletePost);