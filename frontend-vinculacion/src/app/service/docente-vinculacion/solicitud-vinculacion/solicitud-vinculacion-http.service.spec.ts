import { TestBed } from '@angular/core/testing';

import { SolicitudVinculacionHttpService } from './solicitud-vinculacion-http.service';

describe('SolicitudVinculacionHttpService', () => {
  let service: SolicitudVinculacionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudVinculacionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
