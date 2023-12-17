import { Component } from '@angular/core';
import { SalesService } from '../../../service/sales.service';

@Component({
  selector: 'app-sales-sold-category-year',
  templateUrl: './sales-sold-category-year.component.html',
  styleUrls: ['./sales-sold-category-year.component.css']
})
export class SalesSoldCategoryYearComponent {
  sales: any[] = [];
  searchedYear: number | null = null;

  constructor(private salesService: SalesService) { }

  searchByYear() {
    if (this.searchedYear !== null) {
      this.getSalesDataByYear(this.searchedYear);
    }
  }

  clearSalesData(){
    this.sales = [];
  }

  getSalesDataByYear(year: number) {
    this.salesService.getSumOfAmountSoldForSalesByCategoriesByYear(year)
      .subscribe(
        (data: any[]) => {
          this.sales = data;
        },
        error => {
          console.error('Error fetching sales data:', error);
        }
      );
  }
}
