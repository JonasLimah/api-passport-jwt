import express,{ErrorRequestHandler} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { router } from './Routes/api';

dotenv.config();

const server = express();
server.use(cors());

server.use(express.static(path.join(__dirname,"../public")));
server.use(express.urlencoded({extended:true}));

server.use(router)
const errorHandle :ErrorRequestHandler = (err,req,res,next)=>{
    if(err.status){
        res.status(err.status)
    }else{
        res.status(400)
    }
    if(err.message){
        res.json(err.message)
    }else{
        res.json({error: "Pagina nao encontrada"})
    }
    
}
server.use(errorHandle)

server.listen(80);