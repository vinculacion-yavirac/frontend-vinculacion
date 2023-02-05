import { TestBed } from '@angular/core/testing';

import { CertificadosService } from './certificados.service';

describe('CertificadosService', () => {
  let service: CertificadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
