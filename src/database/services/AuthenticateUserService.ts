import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken'
import { UsersResositories } from "../repositories/UserRepositories";


interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersResositories);
        const user = await userRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email ou Senha incorretos!")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email ou Senha incorretos!")
        }

        const token = sign(
            { 
                email: user.email 
            },
            "d7f7f8ee19a732aabfe32a8c9f9ec3a3",
            {
                subject: user.id,
                expiresIn: "1d"
            })

            return token;
    }
}

export { AuthenticateUserService }