import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public signUp(
    userName: string, contact: string, email: string, password:string
  ): Observable<any>{
    return this.http.post(this.url+'user/signUp',{
      userName,contact,email,password
    });
  }

  public login(
    email: string, password: string
  ): Observable<any>{
    return this.http.get(this.url+'user/login',{
      headers:{email,password}
    });
  }

}
