import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  titoloSito:string = 'Sito Bootstrap'

  links:string[] = [
    'Home',
    'Chi Siamo',
    'Contatti'
  ]

  ngOnInit(){

    setTimeout(()=>{
      this.links.pop()
    },3000)

  }

}
