import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {


  constructor(private testSvc:TestService){}

  ngOnInit(){
    this.testSvc.$testo.subscribe(t => {
      console.log(t);
    })
  }

}
