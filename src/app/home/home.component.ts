import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public pokeSearch! : string;

  searchPokemon(pokemon: string){
    this.pokeSearch = pokemon;
  }

}
