export class UserElement {

    public age: number;
    public name: string;
    public surname: string;
    public details: string;

    constructor(name: string, surname: string, age: number, details) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.details = details;
    }
}
// fonctionne en fait comme models, donc différencier la partie cours avec les classes étant placées dans models
