import { Request, Response, NextFunction } from 'express';
export abstract class CheckPermission{
    abstract Check(req: Request, res: Response, next: NextFunction): any
    public test(req: Request, res: Response, next: NextFunction): any{
        this.Check(req, res, next);
    }
}