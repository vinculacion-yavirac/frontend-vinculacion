import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RellenarDatosFormComponent } from './rellenar-datos-form.component';

describe('RellenarDatosFormComponent', () => {
  let component: RellenarDatosFormComponent;
  let fixture: ComponentFixture<RellenarDatosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RellenarDatosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RellenarDatosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
