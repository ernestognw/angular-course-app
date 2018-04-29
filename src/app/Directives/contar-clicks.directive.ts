import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: 'li[appContarClicks]'})

export class AppContarClicksDirective {
  clickN = 0;
  @HostBinding('style.opacity') opacity = .1;
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, 'Número de clicks:', this.clickN++);
    this.opacity += .1;
  }
}
