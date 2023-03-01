import {Request,Response} from 'express';
import { User } from '../Instance/user';

export const ping = (req:Request,res:Response)=>{
    res.json({pong:true});
};

export const login = async (req:Request,res:Response)=>{
    let success = false
    if(req.body.email && req.body.password){
        let {email, password} = req.body;
        let user = await User.findOne({
            where:{email,password}
        });
        if(user){
            console.log(user);
            
            res.json({success:true})
        }else{
            res.json({error:"usuario não encontrado"})
        }

    }else{
        res.json({error:"Digite um email e/ou uma senha"})
    }
};