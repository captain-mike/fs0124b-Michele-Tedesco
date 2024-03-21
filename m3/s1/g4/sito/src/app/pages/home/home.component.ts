import { Component } from '@angular/core';
import { iPizze } from '../../Models/pizze';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pizzeArr:iPizze[] = [];

  //questa dicitura crea in maniera abbreviata una proprietà con accesso a tutti i metodi del service, la proprietà si chiamerà pizzeSvc
  constructor(private pizzeSvc:PizzaService){}

  ngOnInit(){

    this.pizzeSvc.getAllPizza().then(res => {

      this.pizzeArr = res;

    })

  }


}
