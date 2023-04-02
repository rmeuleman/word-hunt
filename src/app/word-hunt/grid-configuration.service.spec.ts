import { TestBed } from '@angular/core/testing';

import { GridConfigurationService } from './grid-configuration.service';

describe('GridConfigurationService', () => {
  let service: GridConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridConfigurationService]
    });
    service = TestBed.inject(GridConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
