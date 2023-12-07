import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, HttpClientModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

export class BodyComponent implements OnInit{
  public pokemon:any[]=[];
  public data: any[]=[];


  constructor(
    private api : ApiService
  ){}

  ngOnInit(){
    this.listPokes();
  }

  public listPokes(){
    console.log("listPokes");
    let counter = 0;

    for(let i=1; i<10; i++){
      this.api.getPokemons(i).subscribe({
        next: (result)=>{
          console.log("r: ",result);
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
// console.log(this.pokemon);
  }
}
