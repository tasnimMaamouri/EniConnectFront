import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAncienEtudiantComponent } from './sidebar-ancien-etudiant.component';

describe('SidebarAncienEtudiantComponent', () => {
  let component: SidebarAncienEtudiantComponent;
  let fixture: ComponentFixture<SidebarAncienEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAncienEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAncienEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
