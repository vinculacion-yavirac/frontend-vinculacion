import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInformeInicialComponent } from './formulario-informe-inicial.component';

describe('FormularioInformeInicialComponent', () => {
  let component: FormularioInformeInicialComponent;
  let fixture: ComponentFixture<FormularioInformeInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInformeInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioInformeInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
