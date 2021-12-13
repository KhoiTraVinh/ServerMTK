import { Request, Response, NextFunction } from 'express';
import { CheckPermission } from './CheckPermission';
import jwt from 'jsonwebtoken';

export class isAuth extends CheckPermission{
    constructor() {
        super()
    }
    public override Check(req: Request, res: Response, next: NextFunction): any
    {
        const authorization = req.headers.authorization;
        if(authorization) {
            const token = authorization.slice(7, authorization.length);
            jwt.verify(
                token,
                process.env.JWT_SECRET,
                (err, decode) => {
                    if(err){
                        res.status(401).send({ message: 'Token khong hop le'});
                    }else
                    {
                        req.body.user = decode;
                        next();
                    }
                }
            );
        }else {
            res.status(401).send({ message: 'Khong co token'});
        }
    }
}