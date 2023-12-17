import { Component } from '@angular/core';
import { SalesService } from '../../../service/sales.service';
import { SalesModel } from '../../../models/sales-model';

@Component({
  selector: 'app-sales-by-quarter',
  templateUrl: './sales-by-quarter.component.html',
  styleUrl: './sales-by-quarter.component.css'
})
export class SalesByQuarterComponent {

  sales: SalesModel[] = [];
  searchedQuarter: number | null = null;

  constructor(private salesService: SalesService) {}

  searchByQuarter() {
    if (this.searchedQuarter !== null) {
      this.getSalesDataByQuarter(this.searchedQuarter);
    }
  }
  clearSalesData(){
    this.sales = [];
  }

  getSalesDataByQuarter(quarter: number) {
    this.salesService.getAllSalesByQuarter(quarter)
      .subscribe(
        (data: SalesModel[]) => {
          this.sales = data;
        },
        error => {
          console.error('Error fetching sales data:', error);
        }
      );
  }
}