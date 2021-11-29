import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../../../core/service/customer.service";

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.scss']
})
export class GetAllCustomersComponent implements OnInit {

  customers:any[]=[];
  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(response => {
      this.customers = response.data;
    }, error => {
      console.log(error);
    })
  }

}
