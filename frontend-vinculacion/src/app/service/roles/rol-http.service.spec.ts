import { TestBed } from '@angular/core/testing';

import { RolHttpService } from './rol-http.service';

describe('RolHttpService', () => {
  let service: RolHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
