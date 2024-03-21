import { Component } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { iPizze } from '../../Models/pizze';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.scss'
})
export class ChiSiamoComponent {

  pizzeArr:iPizze[] = [];

  constructor(private pizzeSvc:PizzaService){}

  ngOnInit(){

    this.pizzeSvc.getActivePizza().then(res => {

      this.pizzeArr = res;

    })

  }

}
