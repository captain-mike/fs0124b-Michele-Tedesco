import { Directive, ElementRef, Input} from '@angular/core';
import { BrowserService } from './browser.service';


@Directive({
  selector: '[show-on-scroll]',
  host: {'(window:scroll)': 'track($event)'}
})
export class ShowOnScrollDirective {

  @Input() threshold:number = 600;

  constructor(private elementRef: ElementRef, private browserSvc:BrowserService) {}

  ngOnInit(){
    if (this.browserSvc.isBrowser()) {
      this.checkAndToggle();
    }
  }

  fadeIn(){
    const targetArea = this.elementRef.nativeElement;
    targetArea.style.opacity = 1;
    targetArea.style.transform = 'translateY(0%)';
  }

  fadeOut(){
    const targetArea = this.elementRef.nativeElement;
    targetArea.style.transition = 'all 0.5s';
    targetArea.style.opacity = 0;
    targetArea.style.display = 'block';
    targetArea.style.transform = 'translateY(30%)';
  }

  track($event: any) {
    this.checkAndToggle();
  }

  checkAndToggle(){

    const targetArea = this.elementRef.nativeElement;
    let top = targetArea?.getBoundingClientRect().top;

    if(top < this.threshold){
      this.fadeIn();
    }else{
      this.fadeOut();
    }
  }

}
