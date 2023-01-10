import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeFinalEstudianteComponent } from './informe-final-estudiante.component';

describe('InformeFinalEstudianteComponent', () => {
  let component: InformeFinalEstudianteComponent;
  let fixture: ComponentFixture<InformeFinalEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeFinalEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeFinalEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
