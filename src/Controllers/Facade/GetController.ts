import {GetSubController} from './GetSubController';
export class GetController{
    subController: GetSubController;
    constructor(){
        this.subController = new GetSubController();
    }
    public get(): any{
        return this.subController.getAllUser();
    }

}