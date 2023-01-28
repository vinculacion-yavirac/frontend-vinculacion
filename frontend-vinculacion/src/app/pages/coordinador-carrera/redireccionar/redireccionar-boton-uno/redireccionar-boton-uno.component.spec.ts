import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedireccionarBotonUnoComponent } from './redireccionar-boton-uno.component';

describe('RedireccionarBotonUnoComponent', () => {
  let component: RedireccionarBotonUnoComponent;
  let fixture: ComponentFixture<RedireccionarBotonUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedireccionarBotonUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedireccionarBotonUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
