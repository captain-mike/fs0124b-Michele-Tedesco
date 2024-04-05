import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ITodo } from './Models/i-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http:HttpClient
  ) { }

  apiUrl:string = environment.usersUrl


  getAll(){
    this.http.get<ITodo[]>(this.apiUrl)
  }
}
