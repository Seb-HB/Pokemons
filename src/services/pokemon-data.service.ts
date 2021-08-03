import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/models/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {
  private static baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) {}

  getPokemonData(index: number): Pokemon {
    let newPokemon: Pokemon;
    this.httpClient.get<any>(PokemonDataService.baseUrl+index).subscribe((datas)=>{
      newPokemon = new Pokemon(
        datas['name'],datas['order'], datas['sprites']['front-default'], datas['sprites']['front-shiny'],
        datas['height'], datas['weight'], datas['types'][0], datas['types'][1]
      );
    });
    return newPokemon;
  }

}
