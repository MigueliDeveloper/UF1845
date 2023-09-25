/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GcursoService } from './gcurso.service';

describe('Service: Gcurso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GcursoService]
    });
  });

  it('should ...', inject([GcursoService], (service: GcursoService) => {
    expect(service).toBeTruthy();
  }));
});
