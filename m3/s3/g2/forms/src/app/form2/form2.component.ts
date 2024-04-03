import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.scss'
})
export class Form2Component {

  //ottengo un riferimento al form
  @ViewChild('f',{static:true}) form!:NgForm;

  generi:string[] = [
    'uomo',
    'donna',
    'altro',
  ]

  submit(form:NgForm){

    console.log(form);
    console.log(form.value);//posso leggere il form da un parametro
    console.log(this.form.value);//posso anche leggerlo grazie a viewChild
  }

  compila(){

    const dati = {
      nome:'Mario',
      cognome:'Rossi'
    }

    console.log(this.form)

    this.form.form.patchValue(dati)

  }


}
