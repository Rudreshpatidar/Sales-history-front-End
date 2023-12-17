import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCategorywiseComponent } from './sales-by-categorywise.component';

describe('SalesByCategorywiseComponent', () => {
  let component: SalesByCategorywiseComponent;
  let fixture: ComponentFixture<SalesByCategorywiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByCategorywiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByCategorywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
