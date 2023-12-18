import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SalesComponent } from './components/sales/sales.component';
import { CostsComponent } from './components/costs/costs.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { TimesComponent } from './components/times/times.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { SalesByCategorywiseComponent } from './components/sales/sales-by-categorywise/sales-by-categorywise.component';
import { SalesCategorywiseAmountsoldComponent } from './components/sales/sales-categorywise-amountsold/sales-categorywise-amountsold.component';
import { AllSalesComponent } from './components/sales/all-sales/all-sales.component';
import { SalesQytsCategoryYearComponent } from './components/sales/sales-qyts-category-year/sales-qyts-category-year.component';
import { SalesSoldCategoryYearComponent } from './components/sales/sales-sold-category-year/sales-sold-category-year.component';
import { CommonModule } from '@angular/common';
import { SalesByQuarterComponent } from './components/sales/sales-by-quarter/sales-by-quarter.component';
import { SalesOnDatebasedComponent } from './components/sales/sales-on-datebased/sales-on-datebased.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/products/add-product/add-product.component';


import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CountriesComponent,
    SalesComponent,
    CostsComponent,
    CustomersComponent,
    ChannelsComponent,
    TimesComponent,
    PromotionsComponent,
    SalesByCategorywiseComponent,
    SalesCategorywiseAmountsoldComponent,
    AllSalesComponent,
    SalesQytsCategoryYearComponent,
    SalesSoldCategoryYearComponent,
    SalesByQuarterComponent,
    SalesOnDatebasedComponent,
    AddProductComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [

    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
