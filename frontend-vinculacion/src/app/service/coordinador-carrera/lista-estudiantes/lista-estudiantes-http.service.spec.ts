import { TestBed } from '@angular/core/testing';

import { ListaEstudiantesHttpService } from './lista-estudiantes-http.service';

describe('ListaEstudiantesHttpService', () => {
  let service: ListaEstudiantesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaEstudiantesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
