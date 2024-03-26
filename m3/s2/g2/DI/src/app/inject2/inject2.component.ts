import { Component, inject } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-inject2',
  templateUrl: './inject2.component.html',
  styleUrl: './inject2.component.scss'
})
export class Inject2Component {

  testSvc:TestService = inject(TestService)

  testo:string = ''

  ngOnInit(){

    console.log( this.testSvc.getUppercaseString() )

    this.testo = this.testSvc.getUppercaseString();

  }
}
