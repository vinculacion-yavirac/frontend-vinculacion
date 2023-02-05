import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRolAddComponent } from './agregar-rol-add.component';

describe('AgregarRolAddComponent', () => {
  let component: AgregarRolAddComponent;
  let fixture: ComponentFixture<AgregarRolAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRolAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRolAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
