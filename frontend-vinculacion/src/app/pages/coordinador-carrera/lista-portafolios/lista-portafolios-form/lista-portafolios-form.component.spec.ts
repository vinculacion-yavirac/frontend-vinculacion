import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPortafoliosFormComponent } from './lista-portafolios-form.component';

describe('ListaPortafoliosFormComponent', () => {
  let component: ListaPortafoliosFormComponent;
  let fixture: ComponentFixture<ListaPortafoliosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPortafoliosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPortafoliosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
