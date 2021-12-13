import { SelectUser } from './../config/QueryDecorater/SelectUser';
import { SelectAll } from './../config/QueryDecorater/SelectAll';
import { db } from './../config/DataBase';
import { BadRequest, Unauthorized } from "ts-httpexceptions";

var test = new SelectAll();
test = new SelectUser(test);

export class UserService{
    public cache: any = {
        'users': {}
    }
    constructor(){}
    public getAllUsers(): any{
        db.query(test.getData(), (err, data) => {
            if(!err){
                this.cache['users']['user'] = data[0];
                console.log(this.cache);
            }
        })
    }
    static async Login (email: string, password: string): Promise<any>{
        var tk;
        await db.query(`select * from user where email = '${email}'`, (err, data) => {
            tk = data[0];
            console.log(tk);
            if(!tk)
            {
                throw new Unauthorized("Account not found."); 
            }
            if (!tk.password && (tk.email)) {
                throw new BadRequest("Pass error");
            }
        });
        console.log(tk);
        return tk;
        
    }

}