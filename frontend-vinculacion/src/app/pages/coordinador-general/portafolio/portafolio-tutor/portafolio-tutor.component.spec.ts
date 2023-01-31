import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortafolioTutorComponent } from './portafolio-tutor.component';


describe('PortafolioTutorComponent', () => {
  let component: PortafolioTutorComponent;
  let fixture: ComponentFixture<PortafolioTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
