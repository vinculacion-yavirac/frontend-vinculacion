import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantePortafolioPortafolioComponent } from './estudiante-portafolio-portafolio.component';

describe('EstudiantePortafolioPortafolioComponent', () => {
  let component: EstudiantePortafolioPortafolioComponent;
  let fixture: ComponentFixture<EstudiantePortafolioPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantePortafolioPortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantePortafolioPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
