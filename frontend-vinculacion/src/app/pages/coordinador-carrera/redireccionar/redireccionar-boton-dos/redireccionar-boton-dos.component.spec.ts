import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedireccionarBotonDosComponent } from './redireccionar-boton-dos.component';

describe('RedireccionarBotonDosComponent', () => {
  let component: RedireccionarBotonDosComponent;
  let fixture: ComponentFixture<RedireccionarBotonDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedireccionarBotonDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedireccionarBotonDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
