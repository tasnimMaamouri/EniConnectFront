import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilArticleComponent } from './accueil-article.component';

describe('AccueilArticleComponent', () => {
  let component: AccueilArticleComponent;
  let fixture: ComponentFixture<AccueilArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
