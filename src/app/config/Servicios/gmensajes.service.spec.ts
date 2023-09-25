/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GmensajesService } from './gmensajes.service';

describe('Service: Gmensajes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GmensajesService]
    });
  });

  it('should ...', inject([GmensajesService], (service: GmensajesService) => {
    expect(service).toBeTruthy();
  }));
});
