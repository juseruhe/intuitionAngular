import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInvalidoComponent } from './registro-invalido.component';

describe('RegistroInvalidoComponent', () => {
  let component: RegistroInvalidoComponent;
  let fixture: ComponentFixture<RegistroInvalidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInvalidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInvalidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
