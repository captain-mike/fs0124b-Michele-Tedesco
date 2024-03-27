import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

  sub!:Subscription

  count:number = 0;

  ngOnInit(){

    const obs = new Observable<number>(observer => {

      let count = 0;

      setInterval(()=>{

        observer.next(count)

        if(count > 3){
          observer.error('Errore')
        }

        count++;

      },1000)

    })

///////////////////////////////////////////////


    this.sub = obs.subscribe({
      next: res => this.count = res,
      error: error => console.error(error),
    })

  }


  ngOnDestroy(){
    this.sub.unsubscribe()//stoppa l'observable
  }

}
