import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEstudiantesGeneralFormComponent } from './lista-estudiantes-general-form.component';


describe('ListaEstudiantesGeneralFormComponent', () => {
  let component: ListaEstudiantesGeneralFormComponent;
  let fixture: ComponentFixture<ListaEstudiantesGeneralFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesGeneralFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesGeneralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
