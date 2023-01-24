import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarFundacionSearchComponent } from './asignar-fundacion-search.component';

describe('AsignarFundacionSearchComponent', () => {
  let component: AsignarFundacionSearchComponent;
  let fixture: ComponentFixture<AsignarFundacionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarFundacionSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarFundacionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
