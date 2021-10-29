import { getCustomRepository } from 'typeorm';
import { UsersResositories } from "../repositories/UserRepositories";
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean,
    password: string
}

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
        const userRepository = getCustomRepository(UsersResositories);

        if (!email) {
            throw new Error("O campo 'Email' é Obrigatório!");
        }

        const userAlreadyExists = await userRepository.findOne({ email });

        if (userAlreadyExists) {

            throw new Error("Já existe um usuário cadastrado com esse endereço de email");
        }

        const passwordHash = await hash(password, 8);
        const user = userRepository.create({ name, email, admin, password: passwordHash });

        await userRepository.save(user);
        return user;
    }
}

export { CreateUserService }