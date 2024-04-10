import { Component } from '@angular/core';
import { Iuser } from 'src/app/Models/iuser';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  newUser:Partial<Iuser> = {}

  constructor(private userSvc:UsersService){}

  aggiungiUtente(){
    this.userSvc.create(this.newUser).subscribe(()=>{
      this.newUser = {}
    })
  }

}
