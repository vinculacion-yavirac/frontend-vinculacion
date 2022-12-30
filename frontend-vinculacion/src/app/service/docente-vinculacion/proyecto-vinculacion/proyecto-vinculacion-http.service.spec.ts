import { TestBed } from '@angular/core/testing';

import { ProyectoVinculacionHttpService } from './proyecto-vinculacion-http.service';

describe('ProyectoVinculacionHttpService', () => {
  let service: ProyectoVinculacionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoVinculacionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
