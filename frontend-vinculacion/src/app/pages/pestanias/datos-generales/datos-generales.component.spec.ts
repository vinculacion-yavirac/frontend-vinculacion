import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesComponent } from './datos-generales.component';

describe('DatosGeneralesComponent', () => {
  let component: DatosGeneralesComponent;
  let fixture: ComponentFixture<DatosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosGeneralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
