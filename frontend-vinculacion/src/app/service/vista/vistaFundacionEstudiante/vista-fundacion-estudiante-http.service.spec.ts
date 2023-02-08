import { TestBed } from '@angular/core/testing';

import { VistaFundacionEstudianteHttpService } from './vista-fundacion-estudiante-http.service';

describe('VistaFundacionEstudianteHttpService', () => {
  let service: VistaFundacionEstudianteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaFundacionEstudianteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
