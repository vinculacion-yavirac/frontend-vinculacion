import { TestBed } from '@angular/core/testing';

import { BibliografiaService } from './bibliografia.service';

describe('BibliografiaService', () => {
  let service: BibliografiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliografiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
