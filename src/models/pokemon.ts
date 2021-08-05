import { IPokeDatas } from "./pokedatas";

export class Pokemon{
    private _name: string='';
    private _pokeDatas!:IPokeDatas;


    constructor() {

    }

    
    set name(name:string){
        this._name = name;
    }
    
    get name(){
        return this._name;
    }
    
    set pokeDatas(pokeDatas:IPokeDatas){
        this._pokeDatas = pokeDatas;
    }

}