import { TestBed } from '@angular/core/testing';

import { InformeInicialHttpService } from './informe-inicial-http.service';

describe('InformeInicialHttpService', () => {
  let service: InformeInicialHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeInicialHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
