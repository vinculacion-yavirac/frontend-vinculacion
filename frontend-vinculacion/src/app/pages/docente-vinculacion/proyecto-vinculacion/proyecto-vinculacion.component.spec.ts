import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoVinculacionComponent } from './proyecto-vinculacion.component';

describe('ProyectoVinculacionComponent', () => {
  let component: ProyectoVinculacionComponent;
  let fixture: ComponentFixture<ProyectoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoVinculacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
