import { TestBed } from '@angular/core/testing';

import { DeoNamestajaService } from './deo-namestaja.service';

describe('DeoNamestajaService', () => {
  let service: DeoNamestajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeoNamestajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
