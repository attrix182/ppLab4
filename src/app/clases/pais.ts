export class Pais{
    public name: string;
    public flag: string;
    public capital:string;
    public population:number;
    public nativeName: string;


    constructor(name: string, flag: string, capital:string, population:number,  nativeName: string){
        this.name = name;
        this.flag = flag;
        this.capital = capital;
        this.population = population;
        this.nativeName = nativeName;

    }
}