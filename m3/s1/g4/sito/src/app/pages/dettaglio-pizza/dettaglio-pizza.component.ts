import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-pizza',
  templateUrl: './dettaglio-pizza.component.html',
  styleUrl: './dettaglio-pizza.component.scss'
})
export class DettaglioPizzaComponent {

  constructor(private router:ActivatedRoute){}


  ngOnInit(){

    this.router.params.subscribe((parametriDellaRotta:any) => {

      console.log(parametriDellaRotta.id);


    })

  }

}
