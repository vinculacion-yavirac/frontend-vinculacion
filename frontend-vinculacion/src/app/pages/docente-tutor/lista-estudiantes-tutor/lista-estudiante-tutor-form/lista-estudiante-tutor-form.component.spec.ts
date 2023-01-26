import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudianteTutorFormComponent } from './lista-estudiante-tutor-form.component';

describe('ListaEstudianteTutorFormComponent', () => {
  let component: ListaEstudianteTutorFormComponent;
  let fixture: ComponentFixture<ListaEstudianteTutorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudianteTutorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudianteTutorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
