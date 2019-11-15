import { TestBed } from '@angular/core/testing';

import { LicplatService } from './licplat.service';

describe('LicplatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicplatService = TestBed.get(LicplatService);
    expect(service).toBeTruthy();
  });
});
