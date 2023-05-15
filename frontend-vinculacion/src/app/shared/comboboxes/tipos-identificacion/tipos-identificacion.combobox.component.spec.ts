import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposIdentificacionComboboxComponent } from './tipos-identificacion.combobox.component';

describe('TiposIdentificacionComboboxComponent', () => {
  let component: TiposIdentificacionComboboxComponent;
  let fixture: ComponentFixture<TiposIdentificacionComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposIdentificacionComboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposIdentificacionComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
