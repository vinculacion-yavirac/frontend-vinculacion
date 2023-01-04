import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantePortafolioComponent } from './estudiante-portafolio.component';

describe('EstudiantePortafolioComponent', () => {
  let component: EstudiantePortafolioComponent;
  let fixture: ComponentFixture<EstudiantePortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantePortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantePortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
