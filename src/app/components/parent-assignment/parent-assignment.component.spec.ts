import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAssignmentComponent } from './parent-assignment.component';

describe('ParentAssignmentComponent', () => {
  let component: ParentAssignmentComponent;
  let fixture: ComponentFixture<ParentAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentAssignmentComponent]
    });
    fixture = TestBed.createComponent(ParentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
