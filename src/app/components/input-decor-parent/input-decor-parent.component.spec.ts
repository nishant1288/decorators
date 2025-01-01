import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecorParentComponent } from './input-decor-parent.component';

describe('InputDecorParentComponent', () => {
  let component: InputDecorParentComponent;
  let fixture: ComponentFixture<InputDecorParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDecorParentComponent]
    });
    fixture = TestBed.createComponent(InputDecorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
