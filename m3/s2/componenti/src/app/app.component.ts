import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'componenti';

  @ViewChild('pippo') elementoCercato!:ElementRef;

  test(){
    console.log('bottone cliccato');
  }

  ngAfterViewInit(){
    console.log(this.elementoCercato.nativeElement);

    this.elementoCercato.nativeElement.style.color = 'red'

  }

}
