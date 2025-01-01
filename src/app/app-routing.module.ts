import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDecorParentComponent } from './components/input-decor-parent/input-decor-parent.component';
import { ParentAssignmentComponent } from './components/parent-assignment/parent-assignment.component';

const routes: Routes = [
  {
    path : '',
    component : InputDecorParentComponent
  },
  {
    path : 'assignment',
    component : ParentAssignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
