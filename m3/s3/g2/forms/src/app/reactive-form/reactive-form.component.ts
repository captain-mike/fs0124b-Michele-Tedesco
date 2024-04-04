import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  form!:FormGroup;

  constructor(private fb: FormBuilder){}


  ngOnInit(){

    this.form = this.fb.group({//il form
      nome: this.fb.control(null ,[Validators.required]),//campo nome
      cognome: this.fb.control(null),//campo cognome
      authData: this.fb.group({
        email: this.fb.control(
          null,//valore
          [Validators.required, Validators.email, this.emailProibiteValidator], //validatori sincroni
           this.emailEsistenteValidator//validator asincroni
          ),
        password: this.fb.control(null)
      })
    })

  }

  /**
   * metodi per la gestione della validazione
  */

  isValid(fieldName:string):boolean{
    const field = this.form.get(fieldName)

    if(!field) return false

    return field.valid//true se il campo cercato è valido
  }

  isTouched(fieldName:string):boolean{
    const field = this.form.get(fieldName)

    if(!field) return false

    return field.touched//true se il campo cercato ha subito interazioni dall'utente
  }

  ifValidAndTouched(fieldName:string){
    return this.isValid(fieldName) && this.isTouched(fieldName)
  }

  getMessage(fieldName: string) {
    return this.form.get(fieldName)?.errors!['message']//restituisce il messaggio di errore dei custom validators
  }

  getErrors(fieldName:string){
    const field = this.form.get(fieldName)

    if(!field) return 'Invalid fieldName';

    return field.errors
  }


  emailProibite:string[] = ['mario@varano.it','sara@wangular.it'];

  //validatore custom sincrono
  //verifica l'inserimento di e-mails presenti
  emailProibiteValidator = (formC:FormControl):ValidationErrors | null => {//formC sarà il campo a cui si collega il validatore

    if(this.emailProibite.includes(formC.value)){//se la mail inserita dall'utente viene trovata anche nell'array
      return {//restituisce un oggetto contenente dettagli della validazione
        invalid: true,
        message: 'Non può entrareehhh!!'
      }
    }

    return null//non ci sono errori
    //null significa che non ci sono errori di inserimento da parte dell'utente
  }

  emailEsistenteValidator(formC:AbstractControl){

    return new Promise<ValidationErrors | null>((resolve, reject) => {

      setTimeout(()=> {
        if(formC.value == 'admin@admin.it'){
          resolve( {
            invalid: true,
            message: 'Non può entrareehhh!!'
          })
        }

        reject(null)
      }, 2000)

    })

  }

}
