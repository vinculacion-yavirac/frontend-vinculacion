import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPortafoliosEstudiantesComponent } from './lista-portafolios-estudiantes.component';

describe('ListaPortafoliosEstudiantesComponent', () => {
  let component: ListaPortafoliosEstudiantesComponent;
  let fixture: ComponentFixture<ListaPortafoliosEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPortafoliosEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPortafoliosEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
