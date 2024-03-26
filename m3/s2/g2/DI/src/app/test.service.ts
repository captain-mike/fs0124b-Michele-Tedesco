import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  testo:string = 'Hello World!'

  constructor() { }

  getString(): string{
    return this.testo
  }

  getUppercaseString():string{
    return this.testo.toUpperCase()
  }

  toUpper(stringa:string):string{
    return stringa.toUpperCase()
  }

}
