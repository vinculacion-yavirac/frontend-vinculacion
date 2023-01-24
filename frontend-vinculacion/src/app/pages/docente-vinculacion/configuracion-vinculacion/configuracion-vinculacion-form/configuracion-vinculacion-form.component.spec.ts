import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionVinculacionFormComponent } from './configuracion-vinculacion-form.component';

describe('ConfiguracionVinculacionFormComponent', () => {
  let component: ConfiguracionVinculacionFormComponent;
  let fixture: ComponentFixture<ConfiguracionVinculacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionVinculacionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionVinculacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
