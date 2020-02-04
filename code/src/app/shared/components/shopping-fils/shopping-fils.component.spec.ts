import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFilsComponent } from './shopping-fils.component';

describe('ShoppingFilsComponent', () => {
  let component: ShoppingFilsComponent;
  let fixture: ComponentFixture<ShoppingFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
