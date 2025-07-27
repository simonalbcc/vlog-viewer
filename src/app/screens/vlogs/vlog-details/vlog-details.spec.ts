import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogDetails } from './vlog-details';

describe('VlogDetails', () => {
  let component: VlogDetails;
  let fixture: ComponentFixture<VlogDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VlogDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlogDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
