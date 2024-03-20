import { Component } from '@angular/core';
import { iPost } from './Models/ipost';
import { iJsonContent } from './Models/json-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  postArr:iPost[] = [];
  postRandom:iPost[] = [];


  ngOnInit(){
    fetch('../assets/db.json')
    .then(res => res.json())
    .then( (contenutoJson:iJsonContent) => {

      this.postArr = contenutoJson.posts

      this.getRandomposts(4)

    })
  }


  getRandomposts(n:number){

    for(let i = 0; i < n; i++){

      let rand = Math.floor(Math.random() * this.postArr.length)

      this.postRandom.push( this.postArr[rand] );

    }

  }

}
