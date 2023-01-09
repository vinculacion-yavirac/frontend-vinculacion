import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeControlComponent } from './informe-control.component';

describe('InformeControlComponent', () => {
  let component: InformeControlComponent;
  let fixture: ComponentFixture<InformeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
