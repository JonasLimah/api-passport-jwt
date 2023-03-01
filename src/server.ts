import express,{Request,Response } from 'express';
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
const notFaunded = {
    status:401,
    error:"Página não encontrada"
};

server.use((req:Request,res:Response)=>{
    res.json(notFaunded)
});

server.listen(80);