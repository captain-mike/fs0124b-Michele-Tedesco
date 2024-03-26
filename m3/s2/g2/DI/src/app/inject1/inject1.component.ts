import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-inject1',
  templateUrl: './inject1.component.html',
  styleUrl: './inject1.component.scss'
})
export class Inject1Component {

  constructor(protected testSvc:TestService){}

  testo:string = ''

  ngOnInit(){

    console.log( this.testSvc.getString() )

    this.testo = this.testSvc.getString();

  }

}
