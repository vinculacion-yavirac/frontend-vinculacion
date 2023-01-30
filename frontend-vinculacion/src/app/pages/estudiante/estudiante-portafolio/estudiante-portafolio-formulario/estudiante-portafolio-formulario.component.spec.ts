import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantePortafolioFormularioComponent } from './estudiante-portafolio-formulario.component';

describe('EstudiantePortafolioFormularioComponent', () => {
  let component: EstudiantePortafolioFormularioComponent;
  let fixture: ComponentFixture<EstudiantePortafolioFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantePortafolioFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantePortafolioFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
