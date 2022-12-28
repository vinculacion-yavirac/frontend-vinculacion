import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFundacionTutorComponent } from './lista-fundacion-tutor.component';

describe('ListaFundacionTutorComponent', () => {
  let component: ListaFundacionTutorComponent;
  let fixture: ComponentFixture<ListaFundacionTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFundacionTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFundacionTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
