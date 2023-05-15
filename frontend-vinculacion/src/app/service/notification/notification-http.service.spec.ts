import { TestBed } from '@angular/core/testing';

import { NotificationHttpService } from './notification-http.service';

describe('NotificationHttpService', () => {
  let service: NotificationHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
