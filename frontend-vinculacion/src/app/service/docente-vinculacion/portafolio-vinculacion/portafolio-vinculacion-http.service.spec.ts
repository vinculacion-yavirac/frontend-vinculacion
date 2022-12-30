import { TestBed } from '@angular/core/testing';

import { PortafolioVinculacionHttpService } from './portafolio-vinculacion-http.service';

describe('PortafolioVinculacionHttpService', () => {
  let service: PortafolioVinculacionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafolioVinculacionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
