import { TestBed } from '@angular/core/testing';

import { RedireccionarHttpService } from './redireccionar-http.service';

describe('RedireccionarHttpService', () => {
  let service: RedireccionarHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedireccionarHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
