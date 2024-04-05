import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericService {

  constructor(
    private http:HttpClient
  ) {}

  apiUrl!:string


  getAll<T>(){
    return this.http.get<T[]>(this.apiUrl)
  }

  getById<T>(id:number){
    return this.http.get<T>(this.apiUrl+'/'+id)
  }


  //questo metodo si può usare per tutti gli attributi
  getByAttribute<T>(attribute:string, value:string|number|boolean){
    return this.http.get<T[]>(`${this.apiUrl}?${attribute}=${value}`);//?firstName=Sheldon
  }

}
