import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeInicialComponent } from './informe-inicial.component';

describe('InformeInicialComponent', () => {
  let component: InformeInicialComponent;
  let fixture: ComponentFixture<InformeInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
