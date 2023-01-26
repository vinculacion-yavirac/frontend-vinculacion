import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudianteTutorBuscarComponent } from './lista-estudiante-tutor-buscar.component';

describe('ListaEstudianteTutorBuscarComponent', () => {
  let component: ListaEstudianteTutorBuscarComponent;
  let fixture: ComponentFixture<ListaEstudianteTutorBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudianteTutorBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudianteTutorBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
