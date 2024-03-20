import { Component } from '@angular/core';

@Component({
  selector: 'app-attributi',
  templateUrl: './attributi.component.html',
  styleUrl: './attributi.component.scss'
})
export class AttributiComponent {

  testo:string = '<b>Ciao</b>';
  urlImmagine:string = 'https://picsum.photos/200/300';

  coloreParagrafo:string = 'green'

}
