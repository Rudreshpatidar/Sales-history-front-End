import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesQytsCategoryYearComponent } from './sales-qyts-category-year.component';

describe('SalesQytsCategoryYearComponent', () => {
  let component: SalesQytsCategoryYearComponent;
  let fixture: ComponentFixture<SalesQytsCategoryYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesQytsCategoryYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesQytsCategoryYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
