import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiantesGeneralSearchComponent } from './lista-estudiantes-general-search.component';

describe('ListaEstudiantesGeneralSearchComponent', () => {
  let component: ListaEstudiantesGeneralSearchComponent;
  let fixture: ComponentFixture<ListaEstudiantesGeneralSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesGeneralSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesGeneralSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
