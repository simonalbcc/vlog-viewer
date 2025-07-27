import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAvatar } from './member-avatar';

describe('MemberAvatar', () => {
  let component: MemberAvatar;
  let fixture: ComponentFixture<MemberAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberAvatar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
