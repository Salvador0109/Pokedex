import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges, OnInit{


  
  @Input() name!: string;
  @Input() image!: string;
  @Input() number!: number;
  @Input() types: string[]=[];
  public colorType0: string="";

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['types'] && changes['types'].currentValue){
      console.log("Dentro del if... ", changes['types'])
      this.getColor(this.types[0]);
    }
  }
  ngOnInit(): void {
    this.getColor(this.types[0]);
  }


  getColor(type:string){

    switch(type){
      case 'fire':
        this.colorType0='bg-red-400';
        break;

      case 'grass':
        this.colorType0='bg-green-400';
        break;

        case 'water':
          this.colorType0='bg-cyan-400';
          break;
      }
    }
}
