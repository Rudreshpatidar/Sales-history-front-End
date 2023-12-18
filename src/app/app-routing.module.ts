import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SalesComponent } from './components/sales/sales.component';

<<<<<<< Updated upstream

const routes: Routes = [
 
  
=======
const routes: Routes = [
  {
    path:'',component:LoginComponent},
  { path:'home',component:HomepageComponent},
  {path:'login',component: LoginComponent},
  {path:'products',component:ProductsComponent},
  {path:'customers',component:CustomersComponent},
  {path:'countries',component:CountriesComponent},
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
