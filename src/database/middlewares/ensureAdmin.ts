import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersResositories } from "../repositories/UserRepositories";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const { user_id } = request;
    const userRepositories = getCustomRepository(UsersResositories);
    const user  = await userRepositories.findOne(user_id);
    const admin = user?.admin;

    if (admin){
        return next();
    }

    return response.status(401).json({
        error: "Usuário não autorizado!"
    })
}