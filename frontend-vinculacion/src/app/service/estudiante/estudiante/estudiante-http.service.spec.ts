import { TestBed } from '@angular/core/testing';

import { EstudianteHttpService } from './estudiante-http.service';

describe('EstudianteHttpService', () => {
  let service: EstudianteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
