import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTabsComponent } from './personal.tabs.component';

describe('PersonalTabsComponent', () => {
  let component: PersonalTabsComponent;
  let fixture: ComponentFixture<PersonalTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
