import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortafolioFormComponent } from './portafolio-form.component';


describe('PortafolioFormComponent', () => {
  let component: PortafolioFormComponent;
  let fixture: ComponentFixture<PortafolioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
