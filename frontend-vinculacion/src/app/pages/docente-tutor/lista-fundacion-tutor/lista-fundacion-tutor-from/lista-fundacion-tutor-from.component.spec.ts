import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFundacionTutorFromComponent } from './lista-fundacion-tutor-from.component';

describe('ListaFundacionTutorFromComponent', () => {
  let component: ListaFundacionTutorFromComponent;
  let fixture: ComponentFixture<ListaFundacionTutorFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFundacionTutorFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFundacionTutorFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
