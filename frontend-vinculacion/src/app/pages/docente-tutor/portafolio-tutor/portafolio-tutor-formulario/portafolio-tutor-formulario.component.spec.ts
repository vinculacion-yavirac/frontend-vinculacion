import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioTutorFormularioComponent } from './portafolio-tutor-formulario.component';

describe('PortafolioTutorFormularioComponent', () => {
  let component: PortafolioTutorFormularioComponent;
  let fixture: ComponentFixture<PortafolioTutorFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioTutorFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioTutorFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
