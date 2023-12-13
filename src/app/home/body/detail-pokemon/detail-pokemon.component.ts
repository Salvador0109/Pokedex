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
  
  
  ngOnInit() {
    this.pokemonInfo();
  }

  closeModal(){
    this.modal.emit(true);
  }

  pokemonInfo(){
    this.api.getPokemon(this.pokemonDetail).subscribe({
      next:(result)=>{
        this.pokeImg = result.sprites.other.dream_world.front_default
        this.pokeWeight = result.weight
      }
    })
  }

  


}
