import { TestBed } from '@angular/core/testing';

import { VistHttpService } from './vist-http.service';

describe('VistHttpService', () => {
  let service: VistHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
