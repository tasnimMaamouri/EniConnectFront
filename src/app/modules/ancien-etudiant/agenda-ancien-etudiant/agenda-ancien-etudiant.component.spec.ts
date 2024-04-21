import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAncienEtudiantComponent } from './agenda-ancien-etudiant.component';

describe('AgendaAncienEtudiantComponent', () => {
  let component: AgendaAncienEtudiantComponent;
  let fixture: ComponentFixture<AgendaAncienEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaAncienEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAncienEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
