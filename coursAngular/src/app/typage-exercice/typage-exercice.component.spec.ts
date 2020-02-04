import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypageExerciceComponent } from './typage-exercice.component';

describe('TypageExerciceComponent', () => {
  let component: TypageExerciceComponent;
  let fixture: ComponentFixture<TypageExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypageExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypageExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
