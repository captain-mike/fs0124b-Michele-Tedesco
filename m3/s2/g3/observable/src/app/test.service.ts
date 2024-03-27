import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  subject = new Subject<string>();//punto d'ingresso dei dati

  $testo = this.subject.asObservable()//punto di uscita dei dati


  add(testo:string){
    this.subject.next(testo)
  }


}
