import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import CustomerDTO from "../model/CustomerDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public saveOrder(customer:Object,items:any[],total:number): Observable<any> {
    return this.http.post(this.url+'order/saveOrder', {
     customer,items,total
    });
  }
}
