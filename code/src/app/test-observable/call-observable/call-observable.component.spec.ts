import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallObservableComponent } from './call-observable.component';

describe('CallObservableComponent', () => {
  let component: CallObservableComponent;
  let fixture: ComponentFixture<CallObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
