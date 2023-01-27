import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRolBotonComponent } from './agregar-rol-boton.component';

describe('AgregarRolBotonComponent', () => {
  let component: AgregarRolBotonComponent;
  let fixture: ComponentFixture<AgregarRolBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRolBotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRolBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
