import { TestBed } from '@angular/core/testing';

import { AgregarRolHttpService } from './agregar-rol-http.service';

describe('AgregarRolHttpService', () => {
  let service: AgregarRolHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarRolHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
