import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioVinculacionFormComponent } from './portafolio-vinculacion-form.component';

describe('PortafolioVinculacionFormComponent', () => {
  let component: PortafolioVinculacionFormComponent;
  let fixture: ComponentFixture<PortafolioVinculacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioVinculacionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioVinculacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
