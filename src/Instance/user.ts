import {DataTypes,Model} from 'sequelize';
import {sequelize } from '../Model/mysql'


export interface UserINstance extends Model {
    id:number,
    email: string,
    password: string
}

export const User = sequelize.define<UserINstance>('mysql',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
},
{
    tableName:"users",
    timestamps:false
})