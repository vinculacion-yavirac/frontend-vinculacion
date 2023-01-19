import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudFormComponent } from './solicitud-form.component';

describe('SolicitudFormComponent', () => {
  let component: SolicitudFormComponent;
  let fixture: ComponentFixture<SolicitudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
