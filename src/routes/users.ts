import { Router } from "express";
import { listAllUsers } from "../controllers/users.js";

export const userRouter = Router();

userRouter.get("/", listAllUsers)