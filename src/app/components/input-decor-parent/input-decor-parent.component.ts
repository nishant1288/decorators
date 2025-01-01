import { Component } from '@angular/core';
import { data } from 'src/app/models/model';

@Component({
  selector: 'app-input-decor-parent',
  templateUrl: './input-decor-parent.component.html',
  styleUrls: ['./input-decor-parent.component.css']
})
export class InputDecorParentComponent {

  parentData : data[] = [
    {
      id : 1,
      name : 'Nishant',
      age : 24
    },
    {
      id : 2,
      name : 'Rao',
      age : 25
    },
    {
      id : 3,
      name : 'Rajsampath',
      age : 26
    },
    {
      id : 4,
      name : 'Veer',
      age : 27
    },
  ]

  dataFromChild : string = '';

  getDataFromChild(event : string) {
    this.dataFromChild = event
  }
  

}
