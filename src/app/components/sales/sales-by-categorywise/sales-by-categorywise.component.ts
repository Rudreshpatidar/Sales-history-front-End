import { Component } from '@angular/core';
import { SalesService } from '../../../service/sales.service';
import { SalesModel } from '../../../models/sales-model';

@Component({
  selector: 'app-sales-by-categorywise',
  templateUrl: './sales-by-categorywise.component.html',
  styleUrl: './sales-by-categorywise.component.css'
})
export class SalesByCategorywiseComponent {

  sales:  any[] = [];

  constructor(private salesService : SalesService){}

    ngOnInit() : void {
      this.getSalesQuantitySoldByCategoryWise();
    }
    private getSalesQuantitySoldByCategoryWise(){
      this.salesService.getSalesQuantitySoldByCategoryWise().subscribe(data =>{
        console.log(data);
        this.sales = data;
});
}
}
