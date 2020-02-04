export class User {
    private name: string;
    private surname: string;
    private age: number;

    public init() {
        this.name = 'Brian';
        this.surname = 'Vieux';
        this.age = 2020;
    }

    public displayUserInConsole() {
        console.log(this);
    }
}
