import { TestBed } from '@angular/core/testing';

import { ReservationService } from './reservation.service';
import {HttpClientModule} from '@angular/common/http';

describe('ReservationService', () => {
  let service: ReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
