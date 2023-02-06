import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteBuscarComponent } from './estudiante-buscar.component';

describe('EstudianteBuscarComponent', () => {
  let component: EstudianteBuscarComponent;
  let fixture: ComponentFixture<EstudianteBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudianteBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
