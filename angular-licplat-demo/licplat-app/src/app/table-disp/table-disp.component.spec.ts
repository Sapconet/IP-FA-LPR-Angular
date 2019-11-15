import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDispComponent } from './table-disp.component';

describe('TableDispComponent', () => {
  let component: TableDispComponent;
  let fixture: ComponentFixture<TableDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
