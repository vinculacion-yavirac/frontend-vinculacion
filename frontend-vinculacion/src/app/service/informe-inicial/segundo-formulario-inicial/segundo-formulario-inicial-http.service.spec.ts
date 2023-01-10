import { TestBed } from '@angular/core/testing';

import { SegundoFormularioInicialHttpService } from './segundo-formulario-inicial-http.service';

describe('SegundoFormularioInicialHttpService', () => {
  let service: SegundoFormularioInicialHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegundoFormularioInicialHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
