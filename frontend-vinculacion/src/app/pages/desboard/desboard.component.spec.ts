import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesboardComponent } from './desboard.component';

describe('DesboardComponent', () => {
  let component: DesboardComponent;
  let fixture: ComponentFixture<DesboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
