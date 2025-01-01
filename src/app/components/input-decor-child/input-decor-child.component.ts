import { Component, EventEmitter, Input, Output } from '@angular/core';
import { data } from 'src/app/models/model';

@Component({
  selector: 'app-input-decor-child',
  templateUrl: './input-decor-child.component.html',
  styleUrls: ['./input-decor-child.component.css']
})
export class InputDecorChildComponent {

  @Input() childData : data[] = [];
  
  @Output() childOutEvent = new EventEmitter();

  parentEventEmit() {
    this.childOutEvent.emit('Event emitted from child component')
  }

}
