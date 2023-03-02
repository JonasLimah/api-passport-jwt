import {Request,Response} from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../Instance/user';

dotenv.config();


export const ping = (req:Request,res:Response)=>{
    res.json({pong:true});
};

export const list = async (req:Request,res:Response) =>{
    
    const users = await User.findAll();
    res.json(users);
}
export const login = async (req:Request,res:Response)=>{
    let success = false;

    if(req.body.email && req.body.password){
        let {email, password} = req.body;
        let user = await User.findOne({
            where:{email,password}
        });
        if(user){
            let token = JWT.sign({
                id: user.id,email:user.email
            },
            process.env.JWT_TOKEN as string,
            {
                expiresIn: "2h"
            }
            
            );
            console.log(user);
            
            res.json({success:true,token});
        }else{
            res.json({error:"usuario não encontrado"})
        }

    }else{
        res.json({error:"Digite um email e/ou uma senha"})
    }
};