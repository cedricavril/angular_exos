import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetObservableComponent } from './set-observable.component';

describe('SetObservableComponent', () => {
  let component: SetObservableComponent;
  let fixture: ComponentFixture<SetObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
