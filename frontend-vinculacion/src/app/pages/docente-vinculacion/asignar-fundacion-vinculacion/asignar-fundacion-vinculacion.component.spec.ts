import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarFundacionVinculacionComponent } from './asignar-fundacion-vinculacion.component';

describe('AsignarFundacionVinculacionComponent', () => {
  let component: AsignarFundacionVinculacionComponent;
  let fixture: ComponentFixture<AsignarFundacionVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarFundacionVinculacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarFundacionVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
