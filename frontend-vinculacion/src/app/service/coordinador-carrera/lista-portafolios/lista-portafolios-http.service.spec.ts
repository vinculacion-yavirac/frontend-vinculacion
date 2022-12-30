import { TestBed } from '@angular/core/testing';

import { ListaPortafoliosHttpService } from './lista-portafolios-http.service';

describe('ListaPortafoliosHttpService', () => {
  let service: ListaPortafoliosHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPortafoliosHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
