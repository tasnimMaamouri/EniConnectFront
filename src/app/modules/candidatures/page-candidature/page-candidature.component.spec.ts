import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCandidatureComponent } from './page-candidature.component';

describe('PageCandidatureComponent', () => {
  let component: PageCandidatureComponent;
  let fixture: ComponentFixture<PageCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCandidatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
