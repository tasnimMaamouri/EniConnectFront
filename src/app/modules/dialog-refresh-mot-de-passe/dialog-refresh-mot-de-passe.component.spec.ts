import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRefreshMotDePasseComponent } from './dialog-refresh-mot-de-passe.component';

describe('DialogRefreshMotDePasseComponent', () => {
  let component: DialogRefreshMotDePasseComponent;
  let fixture: ComponentFixture<DialogRefreshMotDePasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRefreshMotDePasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRefreshMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
