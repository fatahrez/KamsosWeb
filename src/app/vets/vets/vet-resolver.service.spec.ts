import { TestBed } from '@angular/core/testing';

import { VetResolverService } from './vet-resolver.service';

describe('VetResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VetResolverService = TestBed.get(VetResolverService);
    expect(service).toBeTruthy();
  });
});
