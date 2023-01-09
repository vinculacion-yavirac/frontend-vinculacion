import { TestBed } from '@angular/core/testing';

import { AvanceCumplimientoHttpService } from './avance-cumplimiento-http.service';

describe('AvanceCumplimientoHttpService', () => {
  let service: AvanceCumplimientoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvanceCumplimientoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
