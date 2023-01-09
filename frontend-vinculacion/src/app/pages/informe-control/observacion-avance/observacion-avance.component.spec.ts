import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionAvanceComponent } from './observacion-avance.component';

describe('ObservacionAvanceComponent', () => {
  let component: ObservacionAvanceComponent;
  let fixture: ComponentFixture<ObservacionAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservacionAvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservacionAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
