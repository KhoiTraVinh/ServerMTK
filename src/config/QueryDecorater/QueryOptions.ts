import {Query} from './Query';

export abstract class QueryOptions extends Query{
    decoratedQuery: Query;
    public abstract getData():string;
}