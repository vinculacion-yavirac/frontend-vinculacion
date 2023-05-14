import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioArchivedComponent } from './usuario.archived.component';

describe('UsuarioArchivedComponent', () => {
  let component: UsuarioArchivedComponent;
  let fixture: ComponentFixture<UsuarioArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioArchivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
