import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
import { FormsModule } from '@angular/forms';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, HttpClientModule, FormsModule, DetailPokemonComponent, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

export class BodyComponent implements OnInit, OnChanges{
  public pokemon:any[]=[];
  public searchedPokemon:any[]=[];
  public filteredPokemon:any[]=[];
  public search!:boolean;
  public filter!:boolean;

  
  public data: any[]=[];
  public pokeSearch! : string;
  public detailPokemonBnd! : boolean;
  public filterPokemonBnd!: boolean;

  public pokemonDetailName! : string;
  @Input() searchPokemonInput!: string;
  @Input() filterPokemonInput:any[]=[];
  @Input() filterPokemonInputBnd!: boolean;

  constructor(
    private api : ApiService
  ){}

  ngOnChanges(changes: SimpleChanges) {
    if('filterPokemonInputBnd' in changes){
      console.log("Cambios en filterPokemonInputBnd... ");
      if(this.filterPokemonInputBnd){
        this.listPokesByType();
      } else {
        this.listPokes();
      }
    }

    if ('searchPokemonInput' in changes) {
      if (this.searchPokemonInput && this.searchPokemonInput !== '') {
        this.listPokesToSearch();
      } else {
        this.listPokes();
      }
    }
  }

  ngOnInit(){
      this.listPokes();
  }

  public listPokes(){

    this.search = false;
    this.filter = false;
    console.log("Entro a listPokes...");
    let counter = 0;

    for(let i=1; i<10; i++){
      this.api.getPokemons(i).subscribe({
        next: (result)=>{
          // console.log("r: ",result);
          //Se crea un arreglo types
          let types: string[]=[];

          //Se va iterando el types de la llamada a la api
          //se hace un push al types definido anteriormente por cada type.name que encuentre
          result.types.forEach((type:any) => {
            types.push(type.type.name);
          })

          let pokeData = {
            id: result.id,
            position: result.order,
            name: result.name,
            image: result.sprites.other.dream_world.front_default,
            types: types
          }

          this.pokemon[counter] = pokeData;
          counter++;

        }, error: (error)=>{
          console.log("error: ", error);
        }
      });
    }
console.log(this.pokemon);
}


  public listPokesToSearch(){
    this.search = true;
    this.filter = false;
    console.log("Entro a listPokesToSearch...", this.searchPokemonInput);
    this.searchedPokemon = this.pokemon.filter((poke) => poke.name === this.searchPokemonInput);
  }


  public listPokesByType(){
    this.search = false;
    this.filter = true;
    this.filteredPokemon = this.pokemon.filter((poke) => poke.types[0] === this.filterPokemonInput[0]);
  }
  // public listPokesByType() {
  //   this.search = false;
  //   this.filter = true;
  //   console.log("Entro a listPokesByType");
  
  //   this.api.getPokemonsByType(this.filterPokemonInput).pipe(
  //     catchError(error => {
  //       console.error("Error obteniendo URLs de Pokémon:", error);
  //       throw error; // Propaga el error
  //     })
  //   ).subscribe((result: any) => {
  //     console.log("Pokémon filtrados por tipo:", result);
  
  //     const requests: Observable<any>[] = result.results.map((poke: any) =>
  //       this.api.getPokemonByUrl(poke.url).pipe(
  //         catchError(error => {
  //           console.error("Error obteniendo detalles del Pokémon:", error);
  //           throw error; // Propaga el error
  //         })
  //       )
  //     );
  
  //     forkJoin(requests).subscribe((pokemonDetails: any[]) => {
  //       console.log("Detalles de los Pokémon filtrados:", pokemonDetails);
  
  //       this.filteredPokemon = pokemonDetails
  //         .filter((pokeDetails: any) =>
  //           pokeDetails.types.some((type: any) => type.type.name === 'fire')
  //         )
  //         .map((pokeDetails: any) => {
  //           const types = pokeDetails.types.map((type: any) => type.type.name);
  //           return {
  //             id: pokeDetails.id,
  //             position: pokeDetails.order,
  //             name: pokeDetails.name,
  //             image: pokeDetails.sprites.other.dream_world.front_default,
  //             types: types
  //           };
  //         });
  
  //       console.log("Pokémon filtrados procesados:", this.filteredPokemon);
  //     }, error => {
  //       console.error("Error obteniendo detalles de los Pokémon:", error);
  //     });
  //   });
  // }
  
  


  openModal(pokeDetail:string){
    this.detailPokemonBnd = true;
    this.pokemonDetailName = pokeDetail;
  }

  // showAllPokemon(): boolean{
  //   return !this.searchPokemonInput && (!this.filterPokemonInput || this.filterPokemonInput.length === 0)
  // }

  // showSearchedPokemon():boolean{
  //   return !!this.searchPokemonInput;
  // }

  // showFilteredPokemon():boolean{
  //   return !!this.filterPokemonInput && this.filterPokemonInput.length > 0;
  // }



}
