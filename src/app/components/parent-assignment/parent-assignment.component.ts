import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-assignment',
  templateUrl: './parent-assignment.component.html',
  styleUrls: ['./parent-assignment.component.css']
})
export class ParentAssignmentComponent {

  itemsArr : string[] = ['item1', 'item2'];

  addItemsArr() {
    const newItem = `item${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem);
  }

  deleteItemsArr(index : number) {
    if(index >=0 && index < this.itemsArr.length)
    {
      this.itemsArr.splice(index, 1)
    }
  }

}
