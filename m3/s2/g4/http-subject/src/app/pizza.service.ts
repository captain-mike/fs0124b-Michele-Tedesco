import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizza } from './Models/ipizza';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze';

  pizzeArray:iPizza[] = []

  pizzeSubject = new BehaviorSubject<iPizza[]>([]);

  $pizze = this.pizzeSubject.asObservable()

  constructor(private http:HttpClient){
    this.getAll().subscribe(data => {
      this.pizzeSubject.next(data)
      this.pizzeArray = data;
    })
  }

  getAll(){
    return this.http.get<iPizza[]>(this.apiUrl)
  }

  getById(id:number){
    return this.pizzeArray.find(p => p.id == id)
  }

  create(newPizza:Partial<iPizza>){
    return this.http.post<iPizza>(this.apiUrl,newPizza)
    .pipe(tap(pizza=>{

      this.pizzeArray.push(pizza)
      this.pizzeSubject.next(this.pizzeArray)

    }))
  }

  delete(id:number){
    return this.http.delete<iPizza>(this.apiUrl+'/'+id)
    .pipe(tap(()=>{

      this.pizzeArray = this.pizzeArray.filter(p => p.id != id)
      this.pizzeSubject.next(this.pizzeArray)

    }))
  }

  edit(pizza:iPizza){
    return this.http.put<iPizza>(this.apiUrl+'/'+pizza.id,pizza)
    .pipe(tap(()=>{

      //sostituisco la pizza nell'array pizze e comunico l'aggiornamento all behaviorsubject

    }))

  }


}
