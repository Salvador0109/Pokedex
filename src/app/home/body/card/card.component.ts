import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() number!: number;
  @Input() types: string[]=[];
  
  
  getColor(type:string):string{
    console.log("getColors: ", this.types);
    
    switch(this.types[0]){
      case 'FIRE':
        return 'bg-red-400';
      case 'water':
        return 'bg-cyan-400';
        default:
          return 'bg-gray-300';
      }
    }
}
