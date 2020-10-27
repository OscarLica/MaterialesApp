import { TestBed } from '@angular/core/testing';

import { TipoMaterialesService } from './tipo-materiales.service';

describe('TipoMaterialesService', () => {
  let service: TipoMaterialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMaterialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
