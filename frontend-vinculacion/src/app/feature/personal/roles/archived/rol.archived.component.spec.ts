import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolArchivedComponent } from './rol.archived.component';

describe('RolArchivedComponent', () => {
  let component: RolArchivedComponent;
  let fixture: ComponentFixture<RolArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolArchivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
