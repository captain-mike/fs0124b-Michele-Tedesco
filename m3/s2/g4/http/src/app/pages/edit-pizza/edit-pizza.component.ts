import { Component } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { iPizza } from '../../Models/ipizza';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrl: './edit-pizza.component.scss'
})
export class EditPizzaComponent {

  pizza!:iPizza

  resultPizza:iPizza|undefined

  constructor(
    private pizzaSvc:PizzaService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){

    this.route.params.subscribe((params:any) => {

      const id = params.id

      this.pizzaSvc.getById(id).subscribe(pizza => {

        this.pizza = pizza

      })

    })

  }


  edit(){

    this.pizzaSvc.edit(this.pizza).subscribe(pizza => {

      this.resultPizza = pizza;

      setTimeout(()=>{

        this.router.navigate(['/'])//reindirizzo l'utente dopo 5 secondi

      },5000)

    })

  }

}
