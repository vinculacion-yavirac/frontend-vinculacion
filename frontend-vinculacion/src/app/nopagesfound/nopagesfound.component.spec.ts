import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagesfoundComponent } from './nopagesfound.component';

describe('NopagesfoundComponent', () => {
  let component: NopagesfoundComponent;
  let fixture: ComponentFixture<NopagesfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopagesfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NopagesfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
