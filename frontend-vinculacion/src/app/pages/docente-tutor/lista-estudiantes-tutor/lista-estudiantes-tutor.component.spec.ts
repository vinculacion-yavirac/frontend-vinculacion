import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiantesTutorComponent } from './lista-estudiantes-tutor.component';

describe('ListaEstudiantesTutorComponent', () => {
  let component: ListaEstudiantesTutorComponent;
  let fixture: ComponentFixture<ListaEstudiantesTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
