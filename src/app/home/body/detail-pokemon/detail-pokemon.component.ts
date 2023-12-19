import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule],
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
  
  //HP stat:
  public pokeStatHp!:string;
  public pokeStatNumberHp!:number;

  // Attack stat:
  public pokeStatAttack!:string;
  public pokeStatNumberAttack!:number;

  // Defense stat:
  public pokeStatDefense!:string;
  public pokeStatNumberDefense!:number;


  // Speed stat
  public pokeStatSpeed!:string;
  public pokeStatNumberSpeed!:number;

  
  
  
  
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

        // HP
        this.pokeStatHp = result.stats[0].stat.name;
        this.pokeStatNumberHp = result.stats[0].base_stat;

        // ATTACK
        this.pokeStatAttack = result.stats[1].stat.name;
        this.pokeStatNumberAttack = result.stats[1].base_stat;
        
        // DEFENSE
        this.pokeStatDefense = result.stats[2].stat.name;
        this.pokeStatNumberDefense = result.stats[2].base_stat;

        // SPEED
        this.pokeStatSpeed = result.stats[5].stat.name;
        this.pokeStatNumberSpeed = result.stats[5].base_stat;

      }
    })
  }

  


}
