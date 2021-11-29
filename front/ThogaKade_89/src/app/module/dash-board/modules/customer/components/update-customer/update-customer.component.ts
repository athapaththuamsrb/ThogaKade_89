import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../../core/service/customer.service";
import CustomerDTO from "../../../../../../core/model/CustomerDTO";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  updateCustomerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void {
  }

  public updateData():void {
    let dto = new CustomerDTO(
      this.updateCustomerForm.get('id')?.value,
      this.updateCustomerForm.get('name')?.value,
      Number(this.updateCustomerForm.get('salary')?.value),
      this.updateCustomerForm.get('address')?.value
    )
    this.service.updateCustomer(dto).subscribe(response => {
      alert(response.message);
    }, error => {
      console.log(error);
    })
  }

}
