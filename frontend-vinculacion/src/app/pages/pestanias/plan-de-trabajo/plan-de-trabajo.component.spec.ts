import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeTrabajoComponent } from './plan-de-trabajo.component';

describe('PlanDeTrabajoComponent', () => {
  let component: PlanDeTrabajoComponent;
  let fixture: ComponentFixture<PlanDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDeTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
