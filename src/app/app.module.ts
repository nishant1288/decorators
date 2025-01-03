import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDecorParentComponent } from './components/input-decor-parent/input-decor-parent.component';
import { InputDecorChildComponent } from './components/input-decor-child/input-decor-child.component';
import { ParentAssignmentComponent } from './components/parent-assignment/parent-assignment.component';
import { ChildAssignmentComponent } from './components/child-assignment/child-assignment.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ViewChildMainComponent } from './components/view-child-main/view-child-main.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentChildMainComponent } from './content-child-main/content-child-main.component';
import { HighlightElementDirective } from './highlight-element.directive';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDecorParentComponent,
    InputDecorChildComponent,
    ParentAssignmentComponent,
    ChildAssignmentComponent,
    ViewChildComponent,
    ViewChildMainComponent,
    ContentChildComponent,
    ContentChildMainComponent,
    HighlightElementDirective,
    ColorpickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
