import { TestBed } from '@angular/core/testing';
import { NouveauEtudiantService } from './nouveau-etudiant-service.service';
describe('NouveauEtudiantService', () => {
  let service: NouveauEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NouveauEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
