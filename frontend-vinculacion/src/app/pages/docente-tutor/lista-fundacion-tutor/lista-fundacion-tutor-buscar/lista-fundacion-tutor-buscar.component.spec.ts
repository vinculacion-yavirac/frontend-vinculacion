import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFundacionTutorBuscarComponent } from './lista-fundacion-tutor-buscar.component';

describe('ListaFundacionTutorBuscarComponent', () => {
  let component: ListaFundacionTutorBuscarComponent;
  let fixture: ComponentFixture<ListaFundacionTutorBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFundacionTutorBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFundacionTutorBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
