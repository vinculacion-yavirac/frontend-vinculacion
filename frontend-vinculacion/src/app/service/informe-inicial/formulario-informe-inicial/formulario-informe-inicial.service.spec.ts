import { TestBed } from '@angular/core/testing';

import { FormularioInformeInicialService } from './formulario-informe-inicial.service';

describe('FormularioInformeInicialService', () => {
  let service: FormularioInformeInicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioInformeInicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
