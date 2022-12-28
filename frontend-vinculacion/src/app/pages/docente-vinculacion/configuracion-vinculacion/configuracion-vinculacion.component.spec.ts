import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionVinculacionComponent } from './configuracion-vinculacion.component';

describe('ConfiguracionVinculacionComponent', () => {
  let component: ConfiguracionVinculacionComponent;
  let fixture: ComponentFixture<ConfiguracionVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionVinculacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
