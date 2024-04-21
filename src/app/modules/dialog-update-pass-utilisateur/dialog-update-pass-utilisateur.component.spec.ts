import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdatePassUtilisateurComponent } from './dialog-update-pass-utilisateur.component';

describe('DialogUpdatePassUtilisateurComponent', () => {
  let component: DialogUpdatePassUtilisateurComponent;
  let fixture: ComponentFixture<DialogUpdatePassUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdatePassUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdatePassUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
