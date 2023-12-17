import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByQuarterMonthComponent } from './sales-by-quarter-month.component';

describe('SalesByQuarterMonthComponent', () => {
  let component: SalesByQuarterMonthComponent;
  let fixture: ComponentFixture<SalesByQuarterMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByQuarterMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByQuarterMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
