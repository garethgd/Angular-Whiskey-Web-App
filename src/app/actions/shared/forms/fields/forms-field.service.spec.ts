/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormsFieldService } from './forms-field.service';

describe('Service: FormsField', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormsFieldService]
    });
  });

  it('should ...', inject([FormsFieldService], (service: FormsFieldService) => {
    expect(service).toBeTruthy();
  }));
});
