import { Component, ContentChild, ElementRef, contentChild } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.scss'
})
export class ProjectionComponent {

  @ContentChild('titoloProiettato') t!:ElementRef


  ngAfterViewInit(){

    console.log(this.t.nativeElement.innerText);

  }

}
