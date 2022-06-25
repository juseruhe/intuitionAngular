import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarPreguntasComponent } from './cambiar-preguntas.component';

describe('CambiarPreguntasComponent', () => {
  let component: CambiarPreguntasComponent;
  let fixture: ComponentFixture<CambiarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarPreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
