import type { Request, Response } from "express";
import { getAllUsers } from "../services/users.js";


export const listAllUsers = (req: Request, res: Response) =>{

    let users = getAllUsers();
    res.json(users)

}