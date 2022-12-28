import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPortafoliosComponent } from './lista-portafolios.component';

describe('ListaPortafoliosComponent', () => {
  let component: ListaPortafoliosComponent;
  let fixture: ComponentFixture<ListaPortafoliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPortafoliosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPortafoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
