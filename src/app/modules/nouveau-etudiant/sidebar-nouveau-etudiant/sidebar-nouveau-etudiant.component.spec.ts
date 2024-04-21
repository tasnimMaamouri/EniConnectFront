import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNouveauEtudiantComponent } from './sidebar-nouveau-etudiant.component';

describe('SidebarNouveauEtudiantComponent', () => {
  let component: SidebarNouveauEtudiantComponent;
  let fixture: ComponentFixture<SidebarNouveauEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNouveauEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNouveauEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
