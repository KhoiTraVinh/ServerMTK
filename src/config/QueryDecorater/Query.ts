export abstract class Query{
    public getSql: string
    public getData(): string{
        return this.getSql;
    }
}