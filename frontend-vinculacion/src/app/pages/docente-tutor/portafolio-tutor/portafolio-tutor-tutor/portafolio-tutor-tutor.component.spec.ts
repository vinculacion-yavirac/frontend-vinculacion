import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioTutorTutorComponent } from './portafolio-tutor-tutor.component';

describe('PortafolioTutorTutorComponent', () => {
  let component: PortafolioTutorTutorComponent;
  let fixture: ComponentFixture<PortafolioTutorTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioTutorTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioTutorTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
