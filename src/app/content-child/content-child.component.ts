import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements AfterContentInit{

  @ContentChild('para') para?:ElementRef;

  ngAfterContentInit(): void {
    const content = this.para?.nativeElement;
    content.style.fontStyle = 'Italic'
  }

}
