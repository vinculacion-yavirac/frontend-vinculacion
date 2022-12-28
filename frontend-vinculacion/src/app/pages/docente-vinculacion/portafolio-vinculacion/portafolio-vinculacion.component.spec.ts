import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioVinculacionComponent } from './portafolio-vinculacion.component';

describe('PortafolioVinculacionComponent', () => {
  let component: PortafolioVinculacionComponent;
  let fixture: ComponentFixture<PortafolioVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioVinculacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
