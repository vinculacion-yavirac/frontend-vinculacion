import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRolComponent } from './agregar-rol.component';

describe('AgregarRolComponent', () => {
  let component: AgregarRolComponent;
  let fixture: ComponentFixture<AgregarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
