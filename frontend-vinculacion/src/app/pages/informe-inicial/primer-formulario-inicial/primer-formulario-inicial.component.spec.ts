import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFormularioInicialComponent } from './primer-formulario-inicial.component';

describe('PrimerFormularioInicialComponent', () => {
  let component: PrimerFormularioInicialComponent;
  let fixture: ComponentFixture<PrimerFormularioInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerFormularioInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerFormularioInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
