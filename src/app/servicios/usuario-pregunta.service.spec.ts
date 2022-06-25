import { TestBed } from '@angular/core/testing';

import { UsuarioPreguntaService } from './usuario-pregunta.service';

describe('UsuarioPreguntaService', () => {
  let service: UsuarioPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
