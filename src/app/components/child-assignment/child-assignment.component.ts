import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-assignment',
  templateUrl: './child-assignment.component.html',
  styleUrls: ['./child-assignment.component.css']
})
export class ChildAssignmentComponent implements OnInit, OnDestroy{

  @Input() itemsArrChild : string[] = [];

  @Output() deleteIndex = new EventEmitter();

  deleteItemIndex(index : number){
    this.deleteIndex.emit(index);
  }

  ngOnInit(): void {
    console.log('Child Component n init')
  }

  ngOnDestroy(): void {
    console.log('Child Component n destroyed')
  }

}
