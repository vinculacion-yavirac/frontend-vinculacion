import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFundacionesComponent } from './lista-fundaciones.component';

describe('ListaFundacionesComponent', () => {
  let component: ListaFundacionesComponent;
  let fixture: ComponentFixture<ListaFundacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFundacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFundacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
