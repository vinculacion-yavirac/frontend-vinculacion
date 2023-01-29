import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioVinculacionEstudianteFormComponent } from './portafolio-vinculacion-estudiante-form.component';

describe('PortafolioVinculacionEstudianteFormComponent', () => {
  let component: PortafolioVinculacionEstudianteFormComponent;
  let fixture: ComponentFixture<PortafolioVinculacionEstudianteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioVinculacionEstudianteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioVinculacionEstudianteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
