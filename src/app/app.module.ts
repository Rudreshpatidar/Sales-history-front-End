import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
