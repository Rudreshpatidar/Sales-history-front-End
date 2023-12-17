import { Component } from '@angular/core';
import { SalesService } from '../../../service/sales.service';

@Component({
  selector: 'app-sales-categorywise-amountsold',
  templateUrl: './sales-categorywise-amountsold.component.html',
  styleUrl: './sales-categorywise-amountsold.component.css'
})
export class SalesCategorywiseAmountsoldComponent {

  sales:  any[] = [];

  constructor(private salesService : SalesService){}

    ngOnInit() : void {
      this.getSumOfAmountSoldForSalesByCategories();
    }
    private getSumOfAmountSoldForSalesByCategories(){
      this.salesService.getSumOfAmountSoldForSalesByCategories().subscribe(data =>{
        console.log(data);
        this.sales = data;
});
}

}
