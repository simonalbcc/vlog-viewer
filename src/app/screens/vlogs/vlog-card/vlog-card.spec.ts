import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogCard } from './vlog-card';

describe('VlogCard', () => {
  let component: VlogCard;
  let fixture: ComponentFixture<VlogCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VlogCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlogCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
