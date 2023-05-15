import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GendersComboboxComponent } from './genders-combobox.component';

describe('GendersComboboxComponent', () => {
  let component: GendersComboboxComponent;
  let fixture: ComponentFixture<GendersComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GendersComboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GendersComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
