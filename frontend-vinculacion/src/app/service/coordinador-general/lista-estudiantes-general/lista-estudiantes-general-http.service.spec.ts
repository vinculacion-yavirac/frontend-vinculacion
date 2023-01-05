import { TestBed } from '@angular/core/testing';

import { ListaEstudiantesGeneralHttpService } from './lista-estudiantes-general-http.service';

describe('ListaEstudiantesGeneralHttpService', () => {
  let service: ListaEstudiantesGeneralHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaEstudiantesGeneralHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
