import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortafolioEstudianteComponent } from './portafolio-estudiante.component';


describe('PortafolioEstudianteComponent', () => {
  let component: PortafolioEstudianteComponent;
  let fixture: ComponentFixture<PortafolioEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
