import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.scss'
})
export class Form1Component {

  loginData:{nome:string,password:string} = {
      nome : 'Mario',
      password :  ''
  }


  formType = 'password'

  showHide():void{
    if(this.formType == 'text'){
      this.formType = 'password'
    }else{
      this.formType = 'text'
    }

    //this.formType = this.formType == 'text' ? 'password' : 'text'
  }

  getButtonText():string{
    return this.formType == 'text' ? 'Nascondi' : 'Mostra'
  }

}
