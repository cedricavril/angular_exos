import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAngularExerciceComponent } from './directive-angular-exercice.component';

describe('DirectiveAngularExerciceComponent', () => {
  let component: DirectiveAngularExerciceComponent;
  let fixture: ComponentFixture<DirectiveAngularExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveAngularExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveAngularExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
