import { Request, Response, NextFunction } from 'express';
import { CheckPermission } from './CheckPermission';
export enum AuthType {
    Admin = "True"
}
export class isAdmin extends CheckPermission{
    constructor() {
        super()
    }
    public override Check(req: Request, res: Response, next: NextFunction): any
    {
        if(req.body.user && req.body.user.isAdmin == AuthType.Admin) {
            next();
        }else{
            res.status(401).send({ message: 'Khong co quyen admin'});
        }
    }
}
