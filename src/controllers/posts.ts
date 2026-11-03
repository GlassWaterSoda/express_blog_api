import type { Request, Response } from "express";
import { getAllPosts } from "../services/posts.js";

export const listPosts = (req: Request, res: Response)=>{
    
    const posts = getAllPosts()
    res.json(posts) 
}