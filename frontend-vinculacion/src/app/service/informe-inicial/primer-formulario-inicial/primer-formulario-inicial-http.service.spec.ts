import { TestBed } from '@angular/core/testing';

import { PrimerFormularioInicialHttpService } from './primer-formulario-inicial-http.service';

describe('PrimerFormularioInicialHttpService', () => {
  let service: PrimerFormularioInicialHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimerFormularioInicialHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
