import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {SaveCustomerComponent} from "./components/save-customer/save-customer.component";
import {UpdateCustomerComponent} from "./components/update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./components/delete-customer/delete-customer.component";
import {GetAllCustomersComponent} from "./components/get-all-customers/get-all-customers.component";
import {SearchCustomerComponent} from "./components/search-customer/search-customer.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [{ path: '', component: CustomerComponent
  , children: [
  {path: 'saveCustomer', component: SaveCustomerComponent},
  {path: 'updateCustomer', component: UpdateCustomerComponent},
  {path: 'deleteCustomer', component: DeleteCustomerComponent},
    {path: 'searchCustomer', component: SearchCustomerComponent},
  {path: 'getAllCustomers', component: GetAllCustomersComponent}]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
