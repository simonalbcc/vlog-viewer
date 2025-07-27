import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeVlog } from './welcome-vlog';

describe('WelcomeVlog', () => {
  let component: WelcomeVlog;
  let fixture: ComponentFixture<WelcomeVlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeVlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeVlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
