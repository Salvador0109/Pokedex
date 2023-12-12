import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{
  @Input() name!: string;
  @Input() image!: string;
  @Input() number!: number;
  @Input() types: string[]=[];

}
