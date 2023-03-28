import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuageChartComponent } from './guage-chart.component';

describe('GuageChartComponent', () => {
  let component: GuageChartComponent;
  let fixture: ComponentFixture<GuageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuageChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
