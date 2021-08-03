export class Pokemon{
    private name: string;
    private order: number
    private frontimage:string;
    private frontimageshiny:string;
    private height:number;
    private weight:number;
    private type1:string;
    private type2:string;

    constructor(name:string, order:number, frontimage:string, frontimageshiny:string, height:number, weight:number, type1:string, type2:string) {
        this.name = name;
        this.order = order;
        this.frontimage = frontimage;
        this.frontimageshiny = frontimageshiny;
        this.height = height;
        this.weight = weight;
        this.type1 = type1;
        this.type2 = type2;
    }



}