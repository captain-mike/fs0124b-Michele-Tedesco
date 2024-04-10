import { iTodos } from './Models/todos';
import { Injectable } from '@angular/core';
import { Iuser } from './Models/iuser';
import { TodosService } from './todos.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:Iuser[] = []

  userSubject = new BehaviorSubject<Iuser[]>([])//entrata

  users$ = this.userSubject.asObservable()//uscita

  constructor(
    private http:HttpClient,
    private todoSvc:TodosService
  ) {
    this.getAll().subscribe()//popolo l'array ed il subject
  }

  apiUrl:string = environment.usersApi

  getAll():Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.apiUrl)
    .pipe(tap(users => {
      this.userSubject.next(users)
      this.users = users
    }))
  }

  getById(id:number):Iuser|null{
    console.log(this.users);

    return this.users.find(u => u.id == id) || null
  }

  update(user:Iuser){
    return this.http.put<Iuser>(this.apiUrl+`/${user.id}`,user)
    .pipe(tap(responseUser => {//ricevo lo user aggiornato
      const index = this.users.findIndex(u => u.id == user.id)
      this.users.splice(index, 1, responseUser)

      this.userSubject.next(this.users)
    }))
  }

  create(user:Partial<Iuser>){
    return this.http.post<Iuser>(this.apiUrl,user)
    .pipe(tap(responseUser => {//ricevo lo user aggiornato

      this.users.push(responseUser)
      this.userSubject.next(this.users)
    }))
  }

  delete(id:number){
    return this.http.delete<Iuser>(this.apiUrl+`/${id}`)
    .pipe(tap(() => {
      const index = this.users.findIndex(u => u.id == id)
      this.users.splice(index, 1)

      this.userSubject.next(this.users)
    }))
  }

  getUsersWithTodos(){
    return this.users.map(u =>{

        u = {...u}
        const todos = this.todoSvc.getAll().filter(t => t.userId == u.id);

        u.todos = todos

        return u
    })
  }


}
