import { TestBed } from '@angular/core/testing';

import { FirmasService } from './firmas.service';

describe('FirmasService', () => {
  let service: FirmasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirmasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
