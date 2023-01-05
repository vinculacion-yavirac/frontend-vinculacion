import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudianteGeneralComponent } from './lista-estudiante-general.component';

describe('ListaEstudianteGeneralComponent', () => {
  let component: ListaEstudianteGeneralComponent;
  let fixture: ComponentFixture<ListaEstudianteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudianteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudianteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
