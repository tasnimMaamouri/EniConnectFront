import { TestBed } from '@angular/core/testing';

import { CandidatureService } from './candidature-ser.service';

describe('CandidatureSerService', () => {
  let service: CandidatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
