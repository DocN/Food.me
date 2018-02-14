import { TestBed, inject } from '@angular/core/testing';

import { BusinessDataService } from './business-data.service';

describe('BusinessDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessDataService]
    });
  });

  it('should be created', inject([BusinessDataService], (service: BusinessDataService) => {
    expect(service).toBeTruthy();
  }));
});
