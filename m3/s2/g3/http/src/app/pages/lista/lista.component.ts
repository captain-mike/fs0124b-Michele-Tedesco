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


  constructor(private pizzaSvc:PizzaService){}

  ngOnInit(){

      this.pizzaSvc.getAll().subscribe(pizze => {
        this.pizze = pizze
      })

  }

  cancellaPizza(id:number){
    this.pizzaSvc.delete(id).subscribe(()=>{

      this.pizze = this.pizze.filter(p => p.id != id)

    })
  }

}
