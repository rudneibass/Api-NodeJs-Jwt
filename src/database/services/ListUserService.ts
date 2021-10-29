import { getCustomRepository } from "typeorm";
import { UsersResositories } from "../repositories/UserRepositories";

class ListUserService {
    async execute(){
        const userRepositories = getCustomRepository(UsersResositories);
        const users = await userRepositories.find();
        return users;
    }

    async searchById(id: string) {
        const userRepositories = getCustomRepository(UsersResositories);
        const users = await userRepositories.findOne(id);
        return users;
    }


}

export { ListUserService }