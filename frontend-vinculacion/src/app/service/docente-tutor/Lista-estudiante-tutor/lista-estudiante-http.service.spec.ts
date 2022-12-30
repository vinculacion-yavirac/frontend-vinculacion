import { TestBed } from '@angular/core/testing';

import { ListaEstudianteHttpService } from './lista-estudiante-http.service';

describe('ListaEstudianteHttpService', () => {
  let service: ListaEstudianteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaEstudianteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
