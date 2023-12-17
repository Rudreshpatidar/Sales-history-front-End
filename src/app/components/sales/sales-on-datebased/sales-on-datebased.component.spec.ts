import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOnDatebasedComponent } from './sales-on-datebased.component';

describe('SalesOnDatebasedComponent', () => {
  let component: SalesOnDatebasedComponent;
  let fixture: ComponentFixture<SalesOnDatebasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesOnDatebasedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesOnDatebasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
