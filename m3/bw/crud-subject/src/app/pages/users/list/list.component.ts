import { Component } from '@angular/core';
import { Iuser } from 'src/app/Models/iuser';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsersListComponent {

  users:Iuser[] = [];

  constructor(private userSvc:UsersService){}

  ngOnInit(){
    this.userSvc.users$.subscribe(users => {
      this.users = users
    })
  }

  elimina(id:number){
    this.userSvc.delete(id).subscribe()
  }

}
