import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliografiaComponent } from './bibliografia.component';

describe('BibliografiaComponent', () => {
  let component: BibliografiaComponent;
  let fixture: ComponentFixture<BibliografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliografiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
