import { TestBed } from '@angular/core/testing';

import { ObservacionesService } from './observaciones.service';

describe('ObservacionesService', () => {
  let service: ObservacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
