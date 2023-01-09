import { TestBed } from '@angular/core/testing';

import { InformeControlHttpService } from './informe-control-http.service';

describe('InformeControlHttpService', () => {
  let service: InformeControlHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeControlHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
