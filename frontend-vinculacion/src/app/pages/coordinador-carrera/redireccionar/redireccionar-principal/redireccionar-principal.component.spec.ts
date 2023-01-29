import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedireccionarPrincipalComponent } from './redireccionar-principal.component';

describe('RedireccionarPrincipalComponent', () => {
  let component: RedireccionarPrincipalComponent;
  let fixture: ComponentFixture<RedireccionarPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedireccionarPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedireccionarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
