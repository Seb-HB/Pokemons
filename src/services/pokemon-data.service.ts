import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from 'src/models/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {
  private static baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private newPokemon!: Pokemon;

  constructor(private httpClient: HttpClient) {}

  // getPokemonData(index: number): Pokemon {
  //   this.httpClient.get<any>(PokemonDataService.baseUrl+index).subscribe((datas)=>{
  //     this.newPokemon.name=datas['name'];
  //     this.newPokemon.pokeDatas.order = datas['order'];
  //     this.newPokemon.pokeDatas.frontimage=datas['sprites']['front-default'];
  //     this.newPokemon.pokeDatas.frontimageshiny=datas['sprites']['front-shiny'];
  //     this.newPokemon.pokeDatas.height=datas['height'];
  //     this.newPokemon.pokeDatas.weight=datas['weight'];
  //     this.newPokemon.pokeDatas.types.push(datas['types'][0]);
  //     if(datas['types'][1]) {this.newPokemon.pokeDatas.types.push(datas['types'][1])};
  //   });
  //   return this.newPokemon;
  // }

  getPokemonDatas(index:number): Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(PokemonDataService.baseUrl+index);
  }

}
