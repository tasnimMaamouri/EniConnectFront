import { TestBed } from '@angular/core/testing';

import { AncienEtudiantService } from './ancien-etudiant.service';

describe('AncienEtudiantService', () => {
  let service: AncienEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AncienEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
