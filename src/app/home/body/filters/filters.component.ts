import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class AsideComponent {
  public typeFilter: string[]=[];
  @Output () pokeFilterEvent = new EventEmitter<string[]>();
  @Output () pokeFilterEventBnd = new EventEmitter<boolean>();


  types(e:string){
    console.log("event: ",e);
  }

  botonActivo: string | null = null;
  fuegoClic: boolean = false;
  grassClic: boolean = false;
  waterClic: boolean = false;

  
  toggleFondo(filter:string) {
    if (filter === "fire") {
      this.fuegoClic = !this.fuegoClic;
      this.pokeFilterEventBnd.emit(this.fuegoClic);
      if (this.fuegoClic) {
        this.typeFilter.push(filter);
      } else {
        const index = this.typeFilter.indexOf(filter);
        if (index !== -1) {
          this.typeFilter.splice(index, 1);
        }
      }
    } else if (filter === "grass") {
      this.grassClic = !this.grassClic;
      this.pokeFilterEventBnd.emit(this.grassClic);
      if (this.grassClic) {
        this.typeFilter.push(filter);
      } else {
        const index = this.typeFilter.indexOf(filter);
        if (index !== -1) {
          this.typeFilter.splice(index, 1);
        }
      }
    } else if (filter === "water"){
      this.waterClic = !this.waterClic;
      this.pokeFilterEventBnd.emit(this.waterClic);
      if (this.waterClic) {
        this.typeFilter.push(filter);
      } else {
        const index = this.typeFilter.indexOf(filter);
        if (index !== -1) {
          this.typeFilter.splice(index, 1);
        }
      }
    }
    // console.log("toggleFondo: ",this.typeFilter);
    this.pokeFilterEvent.emit(this.typeFilter);
  }
}
