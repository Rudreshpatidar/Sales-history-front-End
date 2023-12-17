import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByQuarterComponent } from './sales-by-quarter.component';

describe('SalesByQuarterComponent', () => {
  let component: SalesByQuarterComponent;
  let fixture: ComponentFixture<SalesByQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByQuarterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
