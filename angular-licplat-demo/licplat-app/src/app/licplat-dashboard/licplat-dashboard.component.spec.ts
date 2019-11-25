import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicplatDashboardComponent } from './licplat-dashboard.component';

describe('LicplatDashboardComponent', () => {
  let component: LicplatDashboardComponent;
  let fixture: ComponentFixture<LicplatDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicplatDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicplatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
