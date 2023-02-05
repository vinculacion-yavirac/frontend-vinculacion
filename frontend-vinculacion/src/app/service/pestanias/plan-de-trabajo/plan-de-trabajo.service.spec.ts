import { TestBed } from '@angular/core/testing';

import { PlanDeTrabajoService } from './plan-de-trabajo.service';

describe('PlanDeTrabajoService', () => {
  let service: PlanDeTrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanDeTrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
