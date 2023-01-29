import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiantesSearchComponent } from './lista-estudiantes-search.component';

describe('ListaEstudiantesSearchComponent', () => {
  let component: ListaEstudiantesSearchComponent;
  let fixture: ComponentFixture<ListaEstudiantesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
