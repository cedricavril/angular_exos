import { TestBed } from '@angular/core/testing';

import { TestSharedService } from './test-shared.service';

describe('TestSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestSharedService = TestBed.get(TestSharedService);
    expect(service).toBeTruthy();
  });
});
