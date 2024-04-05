import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './Models/i-user';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient
  ) {

    this.getByAttribute('firstName','Sheldon').subscribe()
    this.getByemail('email@email.it').subscribe(res => {

      res

    })


   }

  apiUrl:string = environment.usersUrl


  getAll(){
    return this.http.get<IUser[]>(this.apiUrl)
  }

  getById(id:number){
    return this.http.get<IUser>(this.apiUrl+'/'+id)
  }

//questo metodo si usa per ricercare per attributo firstName
  getByFirstname(firstName:string){
    return this.http.get<IUser[]>(this.apiUrl+'?firstName='+firstName)
  }

//questo metodo si usa per ricercare per attributo email
  getByemail(email:string){
    return this.http.get<IUser[]>(this.apiUrl+'?email='+email)
    .pipe(map(array => {
      return array[0]
    }))
  }

  //questo metodo si può usare per tutti gli attributi
  getByAttribute(attribute:string, value:string|number|boolean){
    return this.http.get<IUser[]>(`${this.apiUrl}?${attribute}=${value}`);//?firstName=Sheldon
  }





}
