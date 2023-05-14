import { TestBed } from '@angular/core/testing';

import { EncryptionHttpService } from './encryption-http.service';

describe('EncryptionHttpService', () => {
  let service: EncryptionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
