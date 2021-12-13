import jwt from 'jsonwebtoken';
import {JWTStrategy} from './Strategy';

export class Token extends JWTStrategy{
    public sign(data: any): any{
        return jwt.sign({
            id: data.id.toString(),
            name: data.name,
            email: data.email,
            isAdmin: data.isAdmin,
        }, process.env.JWT_SECRET,
        {
            expiresIn: '30d'
        });
    }
}