import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBreadcrumbsComponent } from './usuario.breadcrumbs.component';

describe('UsuarioBreadcrumbsComponent', () => {
  let component: UsuarioBreadcrumbsComponent;
  let fixture: ComponentFixture<UsuarioBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioBreadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
