import { Component } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { iPizze } from '../../Models/pizze';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent {
  pizzeArr:iPizze[] = [];

  constructor(private pizzeSvc:PizzaService){}

  ngOnInit(){

    this.pizzeSvc.getInactivePizza().then(res => {

      this.pizzeArr = res;

    })

  }
}
