import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWebServiceComponent } from './test-web-service.component';

describe('TestWebServiceComponent', () => {
  let component: TestWebServiceComponent;
  let fixture: ComponentFixture<TestWebServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWebServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWebServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
