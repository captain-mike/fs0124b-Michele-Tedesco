import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrl: './dati.component.scss'
})
export class DatiComponent {

  testi:string[] = []

  constructor(private testSvc:TestService){}


  ngOnInit(){

    this.testSvc.$testo.subscribe(res => {

      this.testi.push(res)

    })

  }

}
