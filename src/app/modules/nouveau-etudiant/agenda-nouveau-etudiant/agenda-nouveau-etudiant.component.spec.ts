import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaNouveauEtudiantComponent } from './agenda-nouveau-etudiant.component';

describe('AgendaNouveauEtudiantComponent', () => {
  let component: AgendaNouveauEtudiantComponent;
  let fixture: ComponentFixture<AgendaNouveauEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaNouveauEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaNouveauEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
