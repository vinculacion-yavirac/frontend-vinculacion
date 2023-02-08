import { TestBed } from '@angular/core/testing';

import { TipoPersonaHttpService } from './tipo-persona-http.service';

describe('TipoPersonaHttpService', () => {
  let service: TipoPersonaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPersonaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
