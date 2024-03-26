import { Component } from '@angular/core';
import { IPizza } from '../Models/i-pizza';

@Component({
  selector: 'app-pratica',
  templateUrl: './pratica.component.html',
  styleUrl: './pratica.component.scss'
})
export class PraticaComponent {

  arrPizze:IPizza[] = [
    {
      gusto:"Margherita",
      prezzo:5,
      disponibile:true
    },
    {
      gusto:"Diavola",
      prezzo:1,
      disponibile:true
    },
    {
      gusto:"Ananas",
      prezzo:500,
      disponibile:false
    }
  ]

  aggiungi(pizza:IPizza){

    this.arrPizze.push(pizza)

  }

  rimuovi(gusto:string){

    //puoi eliminare da un array così
    // let index = this.arrPizze.findIndex(p => p.gusto == gusto)
    // this.arrPizze.splice(index, 1)


    //oppure con filter
    this.arrPizze = this.arrPizze.filter(p => p.gusto != gusto)

  }


}
