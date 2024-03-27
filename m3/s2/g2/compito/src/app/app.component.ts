import { Component } from '@angular/core';
import { PostService } from './post.service';
import { iPost } from './Models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

    postArr:iPost[] = [];

    tagList:string[] = [];

    constructor(private postSvc:PostService){}

    ngOnInit(){
       this.postArr = this.postSvc.getAllPosts()
       this.tagList = this.postSvc.getTagsList()
    }


}
