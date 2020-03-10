import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMyOffersDetailComponent } from './job-my-offers-detail.component';

describe('JobMyOffersDetailComponent', () => {
  let component: JobMyOffersDetailComponent;
  let fixture: ComponentFixture<JobMyOffersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobMyOffersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobMyOffersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
