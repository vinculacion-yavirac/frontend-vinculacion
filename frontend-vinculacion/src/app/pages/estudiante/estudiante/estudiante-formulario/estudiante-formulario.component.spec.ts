import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteFormularioComponent } from './estudiante-formulario.component';

describe('EstudianteFormularioComponent', () => {
  let component: EstudianteFormularioComponent;
  let fixture: ComponentFixture<EstudianteFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudianteFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
