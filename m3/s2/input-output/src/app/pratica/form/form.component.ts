import { Component, EventEmitter, Output } from '@angular/core';
import { IPizza } from '../../Models/i-pizza';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output() onCreatePizza:EventEmitter<IPizza> = new EventEmitter()

  pizza:IPizza = {
    gusto: '',
    prezzo: 0,
    disponibile: false
  }

  invia(){

    this.onCreatePizza.emit(this.pizza)

    this.pizza = {
      gusto: '',
      prezzo: 0,
      disponibile: false
    }

  }

}
