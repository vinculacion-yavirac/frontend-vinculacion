import { TestBed } from '@angular/core/testing';

import { RellenarDatosHttpService } from './rellenar-datos-http.service';

describe('RellenarDatosHttpService', () => {
  let service: RellenarDatosHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RellenarDatosHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
