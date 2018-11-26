import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appContarClicks]'
})
export class ContarClicksDirective {
  clickN = 0;
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, 'Num de clicks: ', this.clickN++);
    this.opacity += .1;
  }
  constructor() { }

}
