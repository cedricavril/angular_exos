import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObservableComponent } from './user-observable.component';

describe('UserObservableComponent', () => {
  let component: UserObservableComponent;
  let fixture: ComponentFixture<UserObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
