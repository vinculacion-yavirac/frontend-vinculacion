import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionVinculacionSearchComponent } from './configuracion-vinculacion-search.component';

describe('ConfiguracionVinculacionSearchComponent', () => {
  let component: ConfiguracionVinculacionSearchComponent;
  let fixture: ComponentFixture<ConfiguracionVinculacionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionVinculacionSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionVinculacionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
