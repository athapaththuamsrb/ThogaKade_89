import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../../core/service/customer.service";

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit {

  searchCustomerForm = new FormGroup({
    id: new FormControl('', Validators.required)
  })

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void {
  }

  selectedCustomer:any=null;

  searchData() {
    this.service.searchCustomer(this.searchCustomerForm.get('id')?.value).subscribe(response => {
      this.selectedCustomer = response.data;
    }, error => {
      console.log(error);
    })
  }


}
