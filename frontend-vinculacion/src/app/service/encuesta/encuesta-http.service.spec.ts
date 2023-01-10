import { TestBed } from '@angular/core/testing';

import { EncuestaHttpService } from './encuesta-http.service';

describe('EncuestaHttpService', () => {
  let service: EncuestaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
