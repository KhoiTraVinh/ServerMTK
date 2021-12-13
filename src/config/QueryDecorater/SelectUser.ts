import {QueryOptions} from './QueryOptions';
import {Query} from './Query';


export class SelectUser extends QueryOptions{
    decoratedQuery: Query;
    constructor(query: Query){
        super();
        this.decoratedQuery = query;
    }
    public getData():string{
        return this.decoratedQuery.getData() + 'FROM user';
    }
}