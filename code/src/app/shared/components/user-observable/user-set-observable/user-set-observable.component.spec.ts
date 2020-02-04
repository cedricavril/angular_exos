import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetObservableComponent } from './user-set-observable.component';

describe('UserSetObservableComponent', () => {
  let component: UserSetObservableComponent;
  let fixture: ComponentFixture<UserSetObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSetObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSetObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
