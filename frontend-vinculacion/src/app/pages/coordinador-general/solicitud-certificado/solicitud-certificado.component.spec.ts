import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCertificadoComponent } from './solicitud-certificado.component';

describe('SolicitudCertificadoComponent', () => {
  let component: SolicitudCertificadoComponent;
  let fixture: ComponentFixture<SolicitudCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCertificadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
