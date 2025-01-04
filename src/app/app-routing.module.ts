import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDecorParentComponent } from './components/input-decor-parent/input-decor-parent.component';
import { ParentAssignmentComponent } from './components/parent-assignment/parent-assignment.component';
import { ViewChildMainComponent } from './components/view-child-main/view-child-main.component';
import { ContentChildMainComponent } from './content-child-main/content-child-main.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';

const routes: Routes = [
  {
    path : '',
    component : InputDecorParentComponent
  },
  {
    path : 'assignment',
    component : ParentAssignmentComponent
  },
  {
    path : 'viewchild',
    component : ViewChildMainComponent
  },
  {
    path : 'contentchild',
    component : ContentChildMainComponent
  },
  {
    path : 'colorpicker',
    component : ColorpickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
