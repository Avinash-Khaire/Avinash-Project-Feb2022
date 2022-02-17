import { TestBed } from '@angular/core/testing';

import { MsgLimitService } from './msg-limit.service';

describe('MsgLimitService', () => {
  let service: MsgLimitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgLimitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
