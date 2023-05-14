import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoListCheckboxComponent } from './permiso.list.checkbox.component';

describe('PermisoListCheckboxComponent', () => {
  let component: PermisoListCheckboxComponent;
  let fixture: ComponentFixture<PermisoListCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoListCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoListCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
