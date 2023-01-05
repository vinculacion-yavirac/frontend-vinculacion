import { TestBed } from '@angular/core/testing';

import { SolicitudCertificadoHttpService } from './solicitud-certificado-http.service';

describe('SolicitudCertificadoHttpService', () => {
  let service: SolicitudCertificadoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudCertificadoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
