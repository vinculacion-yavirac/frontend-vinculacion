import { TestBed } from '@angular/core/testing';

import { PermissionHttpService } from './permission-http.service';

describe('PermissionHttpService', () => {
  let service: PermissionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
