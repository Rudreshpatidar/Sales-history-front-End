import { Component } from '@angular/core';
import { SalesService } from '../../../service/sales.service';

@Component({
  selector: 'app-sales-on-datebased',
  templateUrl: './sales-on-datebased.component.html',
  styleUrl: './sales-on-datebased.component.css'
})
export class SalesOnDatebasedComponent {

    sales: any[] = [];
    searchedDate: Date ; // Assuming it's for date search
  
    constructor(private salesService: SalesService) {}
  
    searchByDate() {
      if (this.searchedDate !== null) {
        this.getSalesByDate(this.searchedDate);
      }
    }
  
    clearSalesData(){
      this.sales = [];
    }
  
    getSalesByDate(date: Date) {
      this.salesService.getSalesByDate(date)
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
  
  
  



