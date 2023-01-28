import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRolSearchComponent } from './agregar-rol-search.component';

describe('AgregarRolSearchComponent', () => {
  let component: AgregarRolSearchComponent;
  let fixture: ComponentFixture<AgregarRolSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRolSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRolSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
