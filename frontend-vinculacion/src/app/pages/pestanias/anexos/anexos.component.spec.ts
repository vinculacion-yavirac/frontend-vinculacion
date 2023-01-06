import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnexosComponent } from './anexos.component';

describe('AnexosComponent', () => {
  let component: AnexosComponent;
  let fixture: ComponentFixture<AnexosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnexosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnexosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
