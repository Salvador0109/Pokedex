import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public pokeSearch! : string;
  @Output () pokeNameEvent = new EventEmitter<string>();

  search(){
    console.log("pokeSearch en header: ", this.pokeSearch);
    this.pokeNameEvent.emit(this.pokeSearch);
  }

}
