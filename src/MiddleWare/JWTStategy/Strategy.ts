export abstract class JWTStrategy{
    public abstract sign(data: any): any;
}