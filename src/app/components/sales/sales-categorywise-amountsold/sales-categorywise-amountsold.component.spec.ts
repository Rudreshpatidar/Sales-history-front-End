import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCategorywiseAmountsoldComponent } from './sales-categorywise-amountsold.component';

describe('SalesCategorywiseAmountsoldComponent', () => {
  let component: SalesCategorywiseAmountsoldComponent;
  let fixture: ComponentFixture<SalesCategorywiseAmountsoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesCategorywiseAmountsoldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesCategorywiseAmountsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
