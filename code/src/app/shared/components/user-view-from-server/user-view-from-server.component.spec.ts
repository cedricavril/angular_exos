import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewFromServerComponent } from './user-view-from-server.component';

describe('UserViewFromServerComponent', () => {
  let component: UserViewFromServerComponent;
  let fixture: ComponentFixture<UserViewFromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewFromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
