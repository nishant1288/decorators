import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecorChildComponent } from './input-decor-child.component';

describe('InputDecorChildComponent', () => {
  let component: InputDecorChildComponent;
  let fixture: ComponentFixture<InputDecorChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDecorChildComponent]
    });
    fixture = TestBed.createComponent(InputDecorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
