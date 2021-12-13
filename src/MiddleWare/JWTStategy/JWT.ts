import {JWTStrategy} from './Strategy';
import {Token} from './JWTInit';

export class JWT{
    Strategy: JWTStrategy;
    data: any
    constructor(data: any)
    {
        this.data = data;
        this.Strategy = new Token();
    }
    public getToken():any{
        this.Strategy.sign(this.data);
    }
}