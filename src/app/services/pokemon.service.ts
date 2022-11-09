import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonListResponse } from '../interfaces/pokemon-list.interface';
import { PokemonResponse } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(
      `${environment.api_base_url}/pokemon`
    );
  }
  getPokemon(name: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(
      `${environment.api_base_url}/pokemon/${name}`
    );
  }
}
