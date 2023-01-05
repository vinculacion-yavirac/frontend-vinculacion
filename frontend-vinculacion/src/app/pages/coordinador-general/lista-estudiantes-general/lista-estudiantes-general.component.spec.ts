import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiantesGeneralComponent } from './lista-estudiantes-general.component';

describe('ListaEstudiantesGeneralComponent', () => {
  let component: ListaEstudiantesGeneralComponent;
  let fixture: ComponentFixture<ListaEstudiantesGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
