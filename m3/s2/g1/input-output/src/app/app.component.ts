import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-output';

  testoInviato:string = '';

  mostraDato(event:string){
    this.testoInviato = event

    setTimeout(()=>{
      //questo svuota la stringa dopo 5 secopndio facendo sparire l'alert di bootstrap
      this.testoInviato = ''
    },5000)

  }
}
