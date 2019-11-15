import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LicplatInfoComponent } from "./licplat-info.component";

describe("LicplatInfoComponent", () => {
  let component: LicplatInfoComponent;
  let fixture: ComponentFixture<LicplatInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LicplatInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicplatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
