import { TestBed } from '@angular/core/testing';

import { ListaFundacionHttpService } from './lista-fundacion-http.service';

describe('ListaFundacionHttpService', () => {
  let service: ListaFundacionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFundacionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
