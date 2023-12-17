import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSoldCategoryYearComponent } from './sales-sold-category-year.component';

describe('SalesSoldCategoryYearComponent', () => {
  let component: SalesSoldCategoryYearComponent;
  let fixture: ComponentFixture<SalesSoldCategoryYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesSoldCategoryYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesSoldCategoryYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
