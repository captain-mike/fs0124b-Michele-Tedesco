import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  user!:Iuser;

  constructor(
    private userSvc:UsersService,
    private route:ActivatedRoute
  ){}

  ngOnInit(){

    this.route.params.subscribe((params:any) => {//mi iscrivo alla rotta

      this.userSvc.users$.subscribe(users => {//mi iscrivo al subject

        const foundUser = users.find(u => u.id == params.id)

        if(foundUser) this.user = foundUser

      })

    })
  }

  modificaUtente(){

    this.userSvc.update(this.user).subscribe(()=> alert('Modificato'))

  }

}
