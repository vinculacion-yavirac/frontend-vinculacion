import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiantesFormComponent } from './lista-estudiantes-form.component';

describe('ListaEstudiantesFormComponent', () => {
  let component: ListaEstudiantesFormComponent;
  let fixture: ComponentFixture<ListaEstudiantesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
