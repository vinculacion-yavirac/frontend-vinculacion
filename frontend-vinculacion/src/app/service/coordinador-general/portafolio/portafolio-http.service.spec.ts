import { TestBed } from '@angular/core/testing';

import { PortafolioHttpService } from './portafolio-http.service';

describe('PortafolioHttpService', () => {
  let service: PortafolioHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafolioHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
