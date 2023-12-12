import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2'

  constructor(
    private http: HttpClient
  ) { 

  }
  public getPokemons(index:number) : Observable<any>{
    // console.log("getPokemons: "+ this.apiUrl+"/pokemon");
    return this.http.get<any>(this.apiUrl+"/pokemon/"+index);
  }


  public getPokemon(name:string) : Observable<any>{
    return this.http.get<any>(this.apiUrl+"/pokemon/"+name);
  }
}
