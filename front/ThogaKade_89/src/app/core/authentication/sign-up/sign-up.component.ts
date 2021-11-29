import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(private _router: Router, private _userService: UserService, private _localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    if (this._localStorage.get('cmjdToken')!=undefined){
      this._router.navigateByUrl('/dashboard');
    }
  }

  public signUp() {
    this._userService.signUp(
      this.signUpForm.get('userName')?.value,
      this.signUpForm.get('contact')?.value,
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('password')?.value
    ).subscribe(response => {
      console.log(response);

      if (response.status) {
        this._localStorage.add('cmjdToken',response.token);
        this._router.navigateByUrl('/DashBoard');
      } else {
        console.log("try again");
      }

    }, error => {
      console.log(error);
    })
  }

}
