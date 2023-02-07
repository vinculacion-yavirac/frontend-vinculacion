import { TestBed } from '@angular/core/testing';

import { CatalogoHttpService } from './catalogo-http.service';

describe('CatalogoHttpService', () => {
  let service: CatalogoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
