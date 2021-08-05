import { Component } from '@angular/core';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  private pokemons:Pokemon[] = [];

constructor(private pokemonDataService:PokemonDataService){
  this.pokemonDataService.getPokemonData(1).subscribe((mypokemon: Pokemon)=>{
    this.pokemons.push(mypokemon);
  });

}

}
