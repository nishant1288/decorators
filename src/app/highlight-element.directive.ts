import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective {
@HostBinding('style.backgroundColor') bgColor = '#f2aa4cff';
  constructor() { }

}
