import { TestBed } from '@angular/core/testing';

import { PasajesService } from './pasajes.service';

describe('PasajesService', () => {
  let service: PasajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
