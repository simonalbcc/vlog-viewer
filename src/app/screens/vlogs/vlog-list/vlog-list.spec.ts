import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogList } from './vlog-list';

describe('VlogList', () => {
  let component: VlogList;
  let fixture: ComponentFixture<VlogList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VlogList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlogList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
