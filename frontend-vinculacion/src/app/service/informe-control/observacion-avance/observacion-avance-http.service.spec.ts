import { TestBed } from '@angular/core/testing';

import { ObservacionAvanceHttpService } from './observacion-avance-http.service';

describe('ObservacionAvanceHttpService', () => {
  let service: ObservacionAvanceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservacionAvanceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
