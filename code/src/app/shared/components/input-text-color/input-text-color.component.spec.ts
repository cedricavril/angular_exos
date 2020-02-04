import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextColorComponent } from './input-text-color.component';

describe('InputTextColorComponent', () => {
  let component: InputTextColorComponent;
  let fixture: ComponentFixture<InputTextColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
