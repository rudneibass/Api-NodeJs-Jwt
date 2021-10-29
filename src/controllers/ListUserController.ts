import { Request, Response } from "express";
import { ListUserService } from "../database/services/ListUserService";

class ListUserController{
    async handle(request: Request, response: Response){
        const listUserService = new ListUserService();
        const users = await listUserService.execute();
        return response.json(users);
    }

    async searchById(request: Request, response: Response) {
        const id = request.params.id;
        const userService = new ListUserService();
        const result = await userService.searchById(id);
        return response.json(result);
    }

}

export { ListUserController }