import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMyOffersComponent } from './job-my-offers.component';

describe('JobMyOffersComponent', () => {
  let component: JobMyOffersComponent;
  let fixture: ComponentFixture<JobMyOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobMyOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobMyOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
