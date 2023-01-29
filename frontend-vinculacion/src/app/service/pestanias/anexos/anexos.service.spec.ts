import { TestBed } from '@angular/core/testing';

import { AnexosService } from './anexos.service';

describe('AnexosService', () => {
  let service: AnexosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnexosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
