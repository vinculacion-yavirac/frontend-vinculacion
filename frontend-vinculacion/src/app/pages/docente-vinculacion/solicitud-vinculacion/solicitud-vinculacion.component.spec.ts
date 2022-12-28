import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudVinculacionComponent } from './solicitud-vinculacion.component';

describe('SolicitudVinculacionComponent', () => {
  let component: SolicitudVinculacionComponent;
  let fixture: ComponentFixture<SolicitudVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudVinculacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
