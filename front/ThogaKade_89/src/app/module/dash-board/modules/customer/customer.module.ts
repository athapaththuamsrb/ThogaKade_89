import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SaveCustomerComponent } from './components/save-customer/save-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CustomerComponent,
    SaveCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    SearchCustomerComponent,
    GetAllCustomersComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule,
        ReactiveFormsModule
    ]
})
export class CustomerModule { }
