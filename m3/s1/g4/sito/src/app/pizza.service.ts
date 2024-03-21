import { Injectable } from '@angular/core';
import { iPizze } from './Models/pizze';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  getAllPizza():Promise<iPizze[]>{

    return fetch('../assets/pizze.json')
    .then(res => res.json())
    .then((res:iPizze[]) => res)

  }

  getActivePizza():Promise<iPizze[]>{
    return this.getAllPizza()
    .then(res => res.filter(p => p.disponibile))
  }

  getInactivePizza():Promise<iPizze[]>{
    return this.getAllPizza()
    .then(res => res.filter(p => !p.disponibile))
  }

}
