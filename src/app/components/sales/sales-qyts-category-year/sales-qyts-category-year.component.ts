import { Component } from '@angular/core';
import { SalesService } from '../../../service/sales.service';

@Component({
  selector: 'app-sales-qyts-category-year',
  templateUrl: './sales-qyts-category-year.component.html',
  styleUrl: './sales-qyts-category-year.component.css'
})
export class SalesQytsCategoryYearComponent {

  salesData: any[] = []; 
  searchedYear: number | null = null;
  hasSearched: boolean = false;


  constructor(private salesService: SalesService) { }

  searchByYear() {
    if (this.searchedYear !== null) {
      this.getSalesDataByYear(this.searchedYear);
      this.hasSearched = true;
    }
  }

  clearSalesData(){
    this.salesData = [] ;    
  }
  getSalesDataByYear(year: number) {
    this.salesService.getSalesQuantitySoldByCategoryWiseByYear(year)
      .subscribe(
        (data: any[]) => {
          this.salesData = data;
        },
        error => {
          console.error('Error fetching sales data:', error);
        }
      );
  }
}




