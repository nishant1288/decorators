import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDecorParentComponent } from './components/input-decor-parent/input-decor-parent.component';
import { InputDecorChildComponent } from './components/input-decor-child/input-decor-child.component';
import { ParentAssignmentComponent } from './components/parent-assignment/parent-assignment.component';
import { ChildAssignmentComponent } from './components/child-assignment/child-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDecorParentComponent,
    InputDecorChildComponent,
    ParentAssignmentComponent,
    ChildAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
