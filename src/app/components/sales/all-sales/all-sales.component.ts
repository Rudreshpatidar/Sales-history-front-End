import { Component, OnInit } from '@angular/core';
import { SalesModel } from '../../../models/sales-model';
import { SalesService } from '../../../service/sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-sales',
  templateUrl: './all-sales.component.html',
  styleUrl: './all-sales.component.css'
})
export class AllSalesComponent implements OnInit {
  
  sales:  SalesModel[] = [];

  constructor(private salesService : SalesService){}

    ngOnInit() : void {
      this.getAllSales();
    }
    private getAllSales(){
      this.salesService.getAllSales().subscribe(data =>{
        console.log(data);
        this.sales = data;
});
}
}


