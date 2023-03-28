import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRNavbarComponent } from './hr-navbar.component';

describe('HRNavbarComponent', () => {
  let component: HRNavbarComponent;
  let fixture: ComponentFixture<HRNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
