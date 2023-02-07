import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RellenarDatosSelectComponent } from './rellenar-datos-select.component';

describe('RellenarDatosSelectComponent', () => {
  let component: RellenarDatosSelectComponent;
  let fixture: ComponentFixture<RellenarDatosSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RellenarDatosSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RellenarDatosSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
