import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective {

  colorArray = ['red', 'blue', 'yellow', 'orange', 'green'];

  @HostBinding('style.backgroundColor') bgColor = '#f2aa4cff';


  @HostListener('click') onToggle() {
    // if (this.bgColor === '#f2aa4cff') {
    //   this.bgColor = 'red';
    //   console.log('faf to red');
    // }
    // else {
    //   this.bgColor = '#f2aa4cff';
    //   console.log('red to faf');
    // }
    this.setRandomColor();
  }
  constructor() { }

  setRandomColor() {
    let randomNum = Math.floor(Math.random() * this.colorArray.length);
    let color = this.colorArray[randomNum];

    if (this.bgColor !== color) {
      this.bgColor = color;
    }
    else {
      this.setRandomColor();
    }
  }

}
