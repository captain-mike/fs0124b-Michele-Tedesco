import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../Modules/i-user';

type AccessData = {
  accessToken:string,
  user:IUser
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()//ci permette di lavorare facilmente con i jwt

  authSubject = new BehaviorSubject<IUser|null>(null);//se nel behavioursubject c'è null significa che l'utente non è loggato, altrimenti conterrà l'oggetto user con tutte le sue info

  user$ = this.authSubject.asObservable()//contiene i dati dell'utente loggato oppure null
  isLoggedIn$ = this.user$.pipe(map(user => !!user))//restituisce true se lò'utente è loggato, false se non lo è
  //!!user è come scrivere Boolean(user)
  //isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)))

  constructor() { }
}
