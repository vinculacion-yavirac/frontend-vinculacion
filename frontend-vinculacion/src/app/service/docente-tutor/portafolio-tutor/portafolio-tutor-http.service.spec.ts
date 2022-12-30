import { TestBed } from '@angular/core/testing';

import { PortafolioTutorHttpService } from './portafolio-tutor-http.service';

describe('PortafolioTutorHttpService', () => {
  let service: PortafolioTutorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafolioTutorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
