import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHero } from './welcome-hero';

describe('WelcomeHero', () => {
  let component: WelcomeHero;
  let fixture: ComponentFixture<WelcomeHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
