import { TestBed } from '@angular/core/testing';

import { HttpHandelerService } from './http-handeler.service';

describe('HttpHandelerService', () => {
  let service: HttpHandelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHandelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
