import { TestBed } from '@angular/core/testing';

import { LicPlatService } from './licplat.service';

describe('LicplatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicPlatService = TestBed.get(LicPlatService);
    expect(service).toBeTruthy();
  });
});
