import { TestBed } from '@angular/core/testing';

import { VistaProyectoFundacionHttpService } from './vista-proyecto-fundacion-http.service';

describe('VistaProyectoFundacionHttpService', () => {
  let service: VistaProyectoFundacionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaProyectoFundacionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
