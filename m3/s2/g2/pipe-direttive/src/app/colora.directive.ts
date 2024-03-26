import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  constructor(private ref:ElementRef) { }

  @Input() colore:string = 'red'


  @HostListener('click') onClick(){
    this.ref.nativeElement.style.color = 'purple'
  }

  @HostListener('window:scroll') onScroll(){
    //allo scorrimento della pagina faccio console log della posizione di ogni elemento che usa la direttiva
    console.log( this.ref.nativeElement.getBoundingClientRect().top );

  }


  ngOnInit(){

    console.log(this.ref.nativeElement)
    this.ref.nativeElement.style.color = this.colore

  }

}
