import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoFormularioInicialComponent } from './segundo-formulario-inicial.component';

describe('SegundoFormularioInicialComponent', () => {
  let component: SegundoFormularioInicialComponent;
  let fixture: ComponentFixture<SegundoFormularioInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoFormularioInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoFormularioInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
