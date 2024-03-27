import { TestService } from './../test.service';
import { Component } from '@angular/core';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

  testi:string[] = []

  sub!:Subscription

  testo:string = '';

  constructor(private testSvc:TestService){}

  ngOnInit(){

    const obs = new Observable<number>(observer => {

      let count = 0;

      setInterval(()=>{

        observer.next(count)

        if(count > 300){
          observer.error('Errore')
        }

        count++;

      },1000)

    })

///////////////////////////////////////////////

    //salvo il subscribe nella proprietà per poterla usare più tardi ed effetturare l'unsubscribe
    this.sub = obs.pipe(
      filter(n => n > 2),
      map(n => 'Numero ricevuto: ' + n)
      )
    .subscribe({
      next: res => console.log(res),
      error: error => console.error(error),
    })

    this.testSvc.$testo
    .subscribe(t => this.testi.push(t))
  }


  ngOnDestroy(){
    this.sub.unsubscribe()//stoppa l'observable
  }

  send(){
    this.testSvc.add(this.testo)
  }


}
