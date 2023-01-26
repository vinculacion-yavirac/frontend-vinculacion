import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioTutorEstudianteComponent } from './portafolio-tutor-estudiante.component';

describe('PortafolioTutorEstudianteComponent', () => {
  let component: PortafolioTutorEstudianteComponent;
  let fixture: ComponentFixture<PortafolioTutorEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioTutorEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioTutorEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
