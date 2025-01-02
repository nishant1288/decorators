import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildMainComponent } from './view-child-main.component';

describe('ViewChildMainComponent', () => {
  let component: ViewChildMainComponent;
  let fixture: ComponentFixture<ViewChildMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildMainComponent]
    });
    fixture = TestBed.createComponent(ViewChildMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
