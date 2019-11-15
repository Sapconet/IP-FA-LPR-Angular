import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicplatTrainPublishComponent } from './licplat-train-publish.component';

describe('LicplatTrainPublishComponent', () => {
  let component: LicplatTrainPublishComponent;
  let fixture: ComponentFixture<LicplatTrainPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicplatTrainPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicplatTrainPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
