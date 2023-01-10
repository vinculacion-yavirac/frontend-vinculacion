import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFinalTutorComponent } from './formulario-final-tutor.component';

describe('FormularioFinalTutorComponent', () => {
  let component: FormularioFinalTutorComponent;
  let fixture: ComponentFixture<FormularioFinalTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFinalTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFinalTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
