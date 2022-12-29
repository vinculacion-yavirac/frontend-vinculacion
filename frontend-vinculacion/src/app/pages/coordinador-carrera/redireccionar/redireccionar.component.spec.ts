import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedireccionarComponent } from './redireccionar.component';

describe('RedireccionarComponent', () => {
  let component: RedireccionarComponent;
  let fixture: ComponentFixture<RedireccionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedireccionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedireccionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
