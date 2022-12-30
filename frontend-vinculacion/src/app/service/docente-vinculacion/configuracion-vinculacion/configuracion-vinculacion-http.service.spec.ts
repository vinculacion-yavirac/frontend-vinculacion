import { TestBed } from '@angular/core/testing';

import { ConfiguracionVinculacionHttpService } from './configuracion-vinculacion-http.service';

describe('ConfiguracionVinculacionHttpService', () => {
  let service: ConfiguracionVinculacionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionVinculacionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
