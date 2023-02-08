import { TestBed } from '@angular/core/testing';

import { VistaPortafolioEstudianteHttpService } from './vista-portafolio-estudiante-http.service';

describe('VistaPortafolioEstudianteHttpService', () => {
  let service: VistaPortafolioEstudianteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaPortafolioEstudianteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
