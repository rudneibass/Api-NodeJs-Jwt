import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

//Interface para forçar o tipo strig para o sub pois o sub é uma função
interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request:Request, response: Response, next: NextFunction)
{
    const authToken = request.headers.authorization;
    
    if(!authToken){
        return response.status(401).end();
    }
    const [,token] = authToken.split(" ");

    try{
        const  { sub } = verify(token, "d7f7f8ee19a732aabfe32a8c9f9ec3a3") as IPayload;
       
        request.user_id = sub;
        return next();
    }catch (err){
        return response.status(401).end();
    }    
}