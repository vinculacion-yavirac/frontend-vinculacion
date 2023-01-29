import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPortafoliosTutorComponent } from './lista-portafolios-tutor.component';

describe('ListaPortafoliosTutorComponent', () => {
  let component: ListaPortafoliosTutorComponent;
  let fixture: ComponentFixture<ListaPortafoliosTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPortafoliosTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPortafoliosTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
