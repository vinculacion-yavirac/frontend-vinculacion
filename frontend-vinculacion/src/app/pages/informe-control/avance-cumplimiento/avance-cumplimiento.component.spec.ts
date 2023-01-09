import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceCumplimientoComponent } from './avance-cumplimiento.component';

describe('AvanceCumplimientoComponent', () => {
  let component: AvanceCumplimientoComponent;
  let fixture: ComponentFixture<AvanceCumplimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvanceCumplimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvanceCumplimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
