import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-child-main',
  templateUrl: './view-child-main.component.html',
  styleUrls: ['./view-child-main.component.css']
})
export class ViewChildMainComponent implements AfterViewInit{

  @ViewChild(ViewChildComponent) childComponent? : ViewChildComponent;
  @ViewChild('btnRef') btnRef? : ElementRef<HTMLButtonElement>;

  incrementCounterFromParent() {
    console.log(this.childComponent);
    this.childComponent?.incrementCounter();
  }

  ngAfterViewInit(): void {
    if(this.btnRef?.nativeElement){
      this.btnRef.nativeElement.innerHTML = 'Counter++'
    }
  }

}
