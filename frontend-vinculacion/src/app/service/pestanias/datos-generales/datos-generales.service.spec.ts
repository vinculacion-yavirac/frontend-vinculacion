import { TestBed } from '@angular/core/testing';

import { DatosGeneralesService } from './datos-generales.service';

describe('DatosGeneralesService', () => {
  let service: DatosGeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosGeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
