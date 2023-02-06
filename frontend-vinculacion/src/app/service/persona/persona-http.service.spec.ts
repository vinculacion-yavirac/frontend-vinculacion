import { TestBed } from '@angular/core/testing';

import { PersonaHttpService } from './persona-http.service';

describe('PersonaHttpService', () => {
  let service: PersonaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
