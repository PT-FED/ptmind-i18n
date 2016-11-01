/* tslint:disable:no-unused-variable */

import { TestBed,  inject } from '@angular/core/testing';
import { GlobalService } from './global.service';

describe('Service: GlobalEvent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalService]
    });
  });

  it('should ...', inject([GlobalService], (service: GlobalService) => {
    expect(service).toBeTruthy();
  }));
});
