import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AsideComponent } from './body/filters/filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public pokeSearch! : string;

  searchPokemon(pokemon: string){
    this.pokeSearch = pokemon;
  }

}
