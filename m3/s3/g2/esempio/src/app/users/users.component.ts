import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Iuser } from '../Models/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  data:Iuser[] = []

  constructor(private userSvc:UsersService){}


  ngOnInit(){


    this.data = this.userSvc.getUsersWithTodos()


  }


}
