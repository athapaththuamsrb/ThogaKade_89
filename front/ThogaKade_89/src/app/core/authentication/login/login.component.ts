import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })


  constructor(private _router: Router, private _userService: UserService, private _localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    if (this._localStorage.get('cmjdToken')!=undefined){
      this._router.navigateByUrl('/DashBoard');
    }
  }

  login():void{
    this._userService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response => {
      console.log(response);
      if (response.status) {
        this._localStorage.add('cmjdToken',response.token);
        this._router.navigateByUrl('/dashboard');
      } else {
        console.log("try again");
      }

    }, error => {
      console.log(error);
    })
  }

}
