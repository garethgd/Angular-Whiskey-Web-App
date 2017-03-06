/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WhiskeyLookupService } from './whiskey.service';

describe('Service: Whiskey', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhiskeyLookupService]
    });
  });

  it('should ...', inject([WhiskeyLookupService], (service: WhiskeyLookupService) => {
    expect(service).toBeTruthy();
  }));
});
