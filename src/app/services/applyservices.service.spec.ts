import { TestBed } from '@angular/core/testing';

import { ApplyservicesService } from './applyservices.service';

describe('ApplyservicesService', () => {
  let service: ApplyservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
