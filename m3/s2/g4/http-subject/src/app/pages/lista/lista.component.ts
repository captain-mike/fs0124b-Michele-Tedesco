import { Component } from '@angular/core';
import { iPizza } from '../../Models/ipizza';
import { PizzaService } from '../../pizza.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  pizze:iPizza[] = []

  editingPizza:iPizza|undefined;


  constructor(private pizzaSvc:PizzaService){}

  ngOnInit(){

      this.pizzaSvc.$pizze.subscribe(pizze => {
        this.pizze = pizze
      })

  }

  cancellaPizza(id:number){
    this.pizzaSvc.delete(id).subscribe()
  }

  assegnaPizza(pizza:iPizza){

    this.editingPizza = {...pizza}
    //si può creare un nuovo oggetto anche con il seguente sistema
    //creando un nuovo oggetto a cui assegniamo tutte le proprietà e valori dell'oggetto preso in causa
    //this.editingPizza = Object.assign(pizza)

  }

  edit():void{

    if(!this.editingPizza) return;

      this.pizzaSvc.edit(this.editingPizza)
      .subscribe(pizza => {

        delete this.editingPizza//elimino l'oggetto facendo sparire il form

        //sostituisco l'oggetto nell'array visualizzando i dati aggiornati
        const index = this.pizze.findIndex(p => p.id == pizza.id)
        this.pizze.splice(index, 1, pizza)

      })
  }

}
