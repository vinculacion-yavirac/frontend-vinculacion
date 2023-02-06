import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolComboboxTutorComponent } from './rol-combobox-tutor.component';

describe('RolComboboxTutorComponent', () => {
  let component: RolComboboxTutorComponent;
  let fixture: ComponentFixture<RolComboboxTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolComboboxTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolComboboxTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
