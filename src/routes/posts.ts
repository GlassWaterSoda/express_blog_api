import Router from "express"
import { listPosts } from "../controllers/posts.js"

export const postRouter = Router()

postRouter.get("/", listPosts)