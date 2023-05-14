import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolBreadcrumbsComponent } from './rol.breadcrumbs.component';

describe('RolBreadcrumbsComponent', () => {
  let component: RolBreadcrumbsComponent;
  let fixture: ComponentFixture<RolBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolBreadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
