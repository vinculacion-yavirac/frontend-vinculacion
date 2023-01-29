import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarFundacionFormComponent } from './asignar-fundacion-form.component';

describe('AsignarFundacionFormComponent', () => {
  let component: AsignarFundacionFormComponent;
  let fixture: ComponentFixture<AsignarFundacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarFundacionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarFundacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
