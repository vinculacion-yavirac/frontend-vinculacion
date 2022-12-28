import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RellenarDatosComponent } from './rellenar-datos.component';

describe('RellenarDatosComponent', () => {
  let component: RellenarDatosComponent;
  let fixture: ComponentFixture<RellenarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RellenarDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RellenarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
