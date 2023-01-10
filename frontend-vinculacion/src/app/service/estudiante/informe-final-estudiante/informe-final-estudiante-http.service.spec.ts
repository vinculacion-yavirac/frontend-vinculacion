import { TestBed } from '@angular/core/testing';

import { InformeFinalEstudianteHttpService } from './informe-final-estudiante-http.service';

describe('InformeFinalEstudianteHttpService', () => {
  let service: InformeFinalEstudianteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeFinalEstudianteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
