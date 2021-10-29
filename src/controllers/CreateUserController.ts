import { Request, Response } from 'express';
import { CreateUserService } from '../database/services/CreateUserService';

class CreateUserController {
    async hendle(request :Request, response: Response){
        const {name, email, admin, password} = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, admin, password});
        return response.json(user);

    }
}

export { CreateUserController }

/*export default {
    async index(req: Request, res: Response) {
        return res.send("Listagem de usuarios");
    }

} */
