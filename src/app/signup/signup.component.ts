import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      password: ["", [Validators.required]],
      birthdate: ["", [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get getFormControls() { return this.signupForm.controls; }


  onSubmit() {

    this.submitted = true;

     // stop here if form is invalid
     if (this.signupForm.invalid) {
      return;
    }

    console.log(this.signupForm.value);

    this.authService.signup(this.signupForm.value)
      .subscribe(
        data => { this.router.navigate(["/login"]);
      },
      error => { console.log(error);
      });
  }




}
