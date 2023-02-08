import { TestBed } from '@angular/core/testing';

import { VistaListaRolesHttpService } from './vista-lista-roles-http.service';

describe('VistaListaRolesHttpService', () => {
  let service: VistaListaRolesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaListaRolesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
