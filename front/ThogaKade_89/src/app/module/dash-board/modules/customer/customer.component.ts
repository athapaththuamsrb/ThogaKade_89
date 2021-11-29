import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Save Customer',
        link: './saveCustomer',
        index: 0
      }, {
        label: 'Update Customer',
        link: './updateCustomer',
        index: 1
      }, {
        label: 'Delete Customer',
        link: './deleteCustomer',
        index: 2
      },
      {
        label: 'Search Customer',
        link: './searchCustomer',
        index: 3
      },
      {
        label: 'Get All Customers',
        link: './getAllCustomers',
        index: 4
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
