import { JWT } from './../MiddleWare/JWTStategy/JWT';
import { isAdmin } from './../MiddleWare/TemplateMethod/isAdmin';
import { isAuth } from './../MiddleWare/TemplateMethod/isAuth';
import { UserService } from './../services/UserService';
import {Request, Response, NextFunction} from 'express';
const get = async (req: Request, res: Response, next: NextFunction):Promise<any> =>{
    //var checkAdmin = new isAdmin();
    //var checkAuth = new isAuth();
    //checkAdmin.test(req, res, next);
    //checkAuth.test(req, res, next);
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
const login = (req: Request, res: Response) => {
    try{
        const tk = UserService.Login(req.body.email, req.body.password);
        var token = new JWT(tk);
        res.send({
            token:token.getToken(),
        });
    }catch(error)
    {
        res.status(500).send({msg: error.message});
    }
}


export const UserController = {
    get,
    login,
};