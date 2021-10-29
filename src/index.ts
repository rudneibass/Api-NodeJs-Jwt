import "reflect-metadata";
import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err: Error, resquest: Request, response: Response, next: NextFunction) => {
    
    if(err instanceof Error ){
        return response.status(400).json({
            error: err.message,
        })
    }
    return response.status(500).json({
           status: "erro",
           message: "Internal Server Error" ,
    });
    
});

app.listen(3333, () => console.log("http://localhost:3333"));


