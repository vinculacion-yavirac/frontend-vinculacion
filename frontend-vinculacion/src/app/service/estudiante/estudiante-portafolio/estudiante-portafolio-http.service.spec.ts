import { TestBed } from '@angular/core/testing';

import { EstudiantePortafolioHttpService } from './estudiante-portafolio-http.service';

describe('EstudiantePortafolioHttpService', () => {
  let service: EstudiantePortafolioHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantePortafolioHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
