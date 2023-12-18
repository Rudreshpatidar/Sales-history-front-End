import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSalesComponent } from './components/sales/all-sales/all-sales.component';
import { SalesOnDatebasedComponent } from './components/sales/sales-on-datebased/sales-on-datebased.component';
import { SalesByQuarterComponent } from './components/sales/sales-by-quarter/sales-by-quarter.component';
import { SalesByCategorywiseComponent } from './components/sales/sales-by-categorywise/sales-by-categorywise.component';
import { SalesCategorywiseAmountsoldComponent } from './components/sales/sales-categorywise-amountsold/sales-categorywise-amountsold.component';
import { SalesQytsCategoryYearComponent } from './components/sales/sales-qyts-category-year/sales-qyts-category-year.component';
import { SalesSoldCategoryYearComponent } from './components/sales/sales-sold-category-year/sales-sold-category-year.component';

const routes: Routes = [

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
