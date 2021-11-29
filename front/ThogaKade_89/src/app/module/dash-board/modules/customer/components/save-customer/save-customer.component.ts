import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../../core/service/customer.service";
import CustomerDTO from "../../../../../../core/model/CustomerDTO";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit {

  saveCustomerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void {
  }

  public saveData():void {
    let dto = new CustomerDTO(
      this.saveCustomerForm.get('id')?.value,
      this.saveCustomerForm.get('name')?.value,
      Number(this.saveCustomerForm.get('salary')?.value),
      this.saveCustomerForm.get('address')?.value
    )
    this.service.saveCustomer(dto).subscribe(response => {
      alert(response.message);
    }, error => {
      console.log(error);
    })
  }
}
