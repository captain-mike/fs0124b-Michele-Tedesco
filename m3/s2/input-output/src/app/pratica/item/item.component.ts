import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPizza } from '../../Models/i-pizza';

@Component({
  selector: '.app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input() pizza!:IPizza

  @Output() onElimina = new EventEmitter<string>()


  elimina(gusto:string){
    this.onElimina.emit(gusto)
  }

}
