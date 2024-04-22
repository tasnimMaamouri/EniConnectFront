import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauEtudiantComponent } from './page-nouveau-etudiant.component';

describe('PageNotFoundComponent', () => {
  let component: PageNouveauEtudiantComponent;
  let fixture: ComponentFixture<PageNouveauEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveauEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouveauEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
