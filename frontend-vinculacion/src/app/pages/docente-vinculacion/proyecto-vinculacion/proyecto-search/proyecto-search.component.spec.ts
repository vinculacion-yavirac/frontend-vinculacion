import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoSearchComponent } from './proyecto-search.component';

describe('ProyectoSearchComponent', () => {
  let component: ProyectoSearchComponent;
  let fixture: ComponentFixture<ProyectoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
