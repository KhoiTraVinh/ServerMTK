import { UserService } from './../../services/UserService';
import {Request, Response, NextFunction} from 'express';
const get = async (req: Request, res: Response, next: NextFunction):Promise<any> =>{
    try{
        var UserSV = new UserService();
        UserSV.getAllUsers();
        res.send(UserSV.cache);
    }catch(err)
    {
        res.status(500).send({
            msg: err.message
        })
    }
}
export class GetSubController{
    constructor(){
    }
    public getAllUser(){
        return get;
    }
}