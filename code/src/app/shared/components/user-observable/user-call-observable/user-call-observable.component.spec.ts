import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCallObservableComponent } from './user-call-observable.component';

describe('UserCallObservableComponent', () => {
  let component: UserCallObservableComponent;
  let fixture: ComponentFixture<UserCallObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCallObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCallObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
