import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() onEventClick: EventEmitter<string> = new EventEmitter()

  invia(){

    this.onEventClick.emit('Hello World!')

  }
}
