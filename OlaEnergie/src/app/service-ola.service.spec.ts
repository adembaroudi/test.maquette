import { TestBed } from '@angular/core/testing';

import { ServiceOlaService } from './service-ola.service';

describe('ServiceOlaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceOlaService = TestBed.get(ServiceOlaService);
    expect(service).toBeTruthy();
  });
});
