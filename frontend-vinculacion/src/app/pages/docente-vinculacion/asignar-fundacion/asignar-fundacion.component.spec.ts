import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarFundacionComponent } from './asignar-fundacion.component';

describe('AsignarFundacionComponent', () => {
  let component: AsignarFundacionComponent;
  let fixture: ComponentFixture<AsignarFundacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarFundacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarFundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
