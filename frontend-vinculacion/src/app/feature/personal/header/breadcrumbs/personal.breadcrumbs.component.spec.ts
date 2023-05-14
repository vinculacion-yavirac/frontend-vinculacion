import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBreadcrumbsComponent } from './personal.breadcrumbs.component';

describe('PersonalBreadcrumbsComponent', () => {
  let component: PersonalBreadcrumbsComponent;
  let fixture: ComponentFixture<PersonalBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalBreadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
