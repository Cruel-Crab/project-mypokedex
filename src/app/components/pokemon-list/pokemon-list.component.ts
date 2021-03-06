import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  page = 0;
  totalPokeCount: number | undefined;
  isFetching: boolean = false;

  constructor(private pokeService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    console.log(this.page);
    if(this.page == 0){
      this.isFetching = true;
    }
    
    this.pokeService.getPokemons(10, this.page)
      .subscribe((response: any) => {
        this.isFetching = false;

        this.totalPokeCount = response.count;
        console.log(this.totalPokeCount)

        response.results.forEach((result: any) => {

          this.pokeService.getMoreData(result.name)
            .subscribe((uniqueResponse: any) => {

              this.pokemonList.push(uniqueResponse);
              console.log(this.pokemonList);
              this.page++;

            }
            )
        });

      })
  }
}
