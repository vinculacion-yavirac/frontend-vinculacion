import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudSearchComponent } from './solicitud-search.component';

describe('SolicitudSearchComponent', () => {
  let component: SolicitudSearchComponent;
  let fixture: ComponentFixture<SolicitudSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
