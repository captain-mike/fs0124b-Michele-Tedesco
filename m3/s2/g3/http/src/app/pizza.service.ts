import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizza } from './Models/ipizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze';

  constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<iPizza[]>(this.apiUrl)
  }

  getById(id:number){
    return this.http.get<iPizza>(this.apiUrl+'/'+id)
  }

  create(newPizza:iPizza){
    return this.http.post<iPizza>(this.apiUrl,newPizza)
  }

  delete(id:number){
    return this.http.delete<iPizza>(this.apiUrl+'/'+id)
  }

  edit(pizza:iPizza){
    return this.http.put<iPizza>(this.apiUrl+'/'+pizza.id,pizza)
  }


}
