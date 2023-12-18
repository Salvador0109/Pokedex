import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit{
  constructor(private api : ApiService){}

  @Output () modal = new EventEmitter<boolean>();

  @Input () pokemonDetail! : string;
  public pokeImg!: string;
  public pokeWeight!: number;
  public pokeTypes!: string[];
  public pokeHeight!: number;
  
  //test:
  public pokeStatName!:string;
  public pokeStatNumber!:number;
  
  ngOnInit() {
    this.pokemonInfo();
  }

  closeModal(){
    this.modal.emit(true);
  }

  pokemonInfo(){
    this.api.getPokemon(this.pokemonDetail).subscribe({
      next:(result)=>{
        let types: string[]=[];

        result.types.forEach((type:any) => {
          types.push(type.type.name);
        })

        // let stats: string[]=[];

        console.log("result:", result);
        this.pokeImg = result.sprites.other.dream_world.front_default
        this.pokeWeight = result.weight;
        this.pokeTypes = types;
        this.pokeHeight = result.height;
        this.pokeStatName = result.stats[0].stat.name;
        this.pokeStatNumber = result.stats[0].base_stat;
      }
    })
  }

  


}
