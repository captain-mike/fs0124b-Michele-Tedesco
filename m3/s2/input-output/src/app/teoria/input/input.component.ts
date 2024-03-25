import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() nome:string = ''//nome ha un valore di default, che viene sostituito dall'eventuale valore in entrata
  @Input() cognome!:string// il punto esclamativo comunica a ts che anche se il valore sembrerebbe mancare, voi sapete che arriverà

}
