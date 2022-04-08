import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private _http: HttpClient) { }

  getPokemons(limit: number, offset: number){
    return this._http.get(this.baseUrl + `?limit=${limit}&offset=${offset}`);
  }

  getMoreData(name: string){
    return this._http.get(this.baseUrl+`/${name}`);
  }
}
