import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolComboboxComponent } from './rol-combobox.component';

describe('RolComboboxComponent', () => {
  let component: RolComboboxComponent;
  let fixture: ComponentFixture<RolComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolComboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
