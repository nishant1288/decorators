import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildMainComponent } from './content-child-main.component';

describe('ContentChildMainComponent', () => {
  let component: ContentChildMainComponent;
  let fixture: ComponentFixture<ContentChildMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentChildMainComponent]
    });
    fixture = TestBed.createComponent(ContentChildMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
