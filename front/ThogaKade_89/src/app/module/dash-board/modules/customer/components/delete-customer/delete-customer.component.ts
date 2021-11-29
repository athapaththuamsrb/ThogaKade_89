import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../../core/service/customer.service";
import CustomerDTO from "../../../../../../core/model/CustomerDTO";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  deleteCustomerForm = new FormGroup({
    id: new FormControl('', Validators.required)
  })

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void {
  }

  public deleteData():void {
    let id = this.deleteCustomerForm.get('id')?.value;
    this.service.deleteCustomer(id).subscribe(response => {
      alert(response.message);
    }, error => {
      console.log(error);
    })
  }


}
