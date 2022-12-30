import { TestBed } from '@angular/core/testing';

import { AsignarFundacionVinculacionHttpService } from './asignar-fundacion-vinculacion-http.service';

describe('AsignarFundacionVinculacionHttpService', () => {
  let service: AsignarFundacionVinculacionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignarFundacionVinculacionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
