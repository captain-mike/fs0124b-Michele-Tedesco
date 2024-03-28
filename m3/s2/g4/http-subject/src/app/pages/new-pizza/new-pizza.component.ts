import { Component } from '@angular/core';
import { iPizza } from '../../Models/ipizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrl: './new-pizza.component.scss'
})
export class NewPizzaComponent {

  newPizza:Partial<iPizza> = {
    disponibile:true
  }

  constructor(private pizzaSvc:PizzaService){}

  save(){
    this.pizzaSvc.create(this.newPizza)
    .subscribe(()=>{

      this.newPizza = {disponibile:true}

    })
  }

}
