import passport from 'passport';
import dotenv from 'dotenv';
import { ExtractJwt,Strategy as JWTstrategy } from 'passport-jwt';
import { User } from '../Instance/user';
import { Request,Response,NextFunction } from 'express';


dotenv.config();
const notAutorized = { status:401,message:"Não Autorizado"};
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.JWT_TOKEN as string
}

passport.use( new JWTstrategy(options,async (payload,done)=>{
    const user = await User.findByPk(payload.id)
    if(user){
       return done(null,user);
    }else{
        return done(notAutorized,false);
    }
})  
);

export const privetPassport = (req:Request,res:Response,next:NextFunction)=>{
    passport.authenticate("jwt",(err:any,user:string)=>{
        req.user = user;
        return user ? next() : next(notAutorized);
    })(req,res,next)
    //lembrando a ordem req,res e next se não da error kkkk passei 2h quebrando a cabeça!
}   


export default passport