import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }



  // convenience getter for easy access to form fields
  get getFormControls() { return this.loginForm.controls; }


  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(
        response => {
          // set token, then redirect user to home page
          localStorage.setItem("token", response);
          this.router.navigate(["/home"]);
        },
        error => {
          console.log(error);
        });
  }

}
