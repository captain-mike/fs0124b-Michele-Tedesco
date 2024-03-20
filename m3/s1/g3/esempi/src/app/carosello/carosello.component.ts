import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrl: './carosello.component.scss'
})
export class CaroselloComponent implements OnInit {

  immagini:string[] = [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3'
  ]

  immagineCorrente:string = this.immagini[0]
  indice:number = 0;

  fotoSuccessiva(){
    this.indice++;
    this.immagineCorrente = this.immagini[this.indice]
  }
  fotoPrecedente(){
    this.indice--;
    this.immagineCorrente = this.immagini[this.indice]
  }

  ngOnInit(){
    //questo metodo si avvia da solo al caricamento del componente
    // setInterval(()=>{

    //   this.indice++;
    //   this.immagineCorrente = this.immagini[this.indice]

    //   if(this.indice > this.immagini.length - 1){
    //     this.indice = 0;
    //   }

    // },3000)

  }

}
