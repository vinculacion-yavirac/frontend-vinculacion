import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioVinculacionTutorFormComponent } from './portafolio-vinculacion-tutor-form.component';

describe('PortafolioVinculacionTutorFormComponent', () => {
  let component: PortafolioVinculacionTutorFormComponent;
  let fixture: ComponentFixture<PortafolioVinculacionTutorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioVinculacionTutorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioVinculacionTutorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
