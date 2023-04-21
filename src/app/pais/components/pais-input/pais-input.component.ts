import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
 
})
export class PaisInputComponent {

  @Output() onEnter:EventEmitter<string>= new EventEmitter();
  
  termino:string='';
  
  buscar(){
    this.onEnter.emit(this.termino);
  }
}
