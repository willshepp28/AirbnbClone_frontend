import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getNamePhoto()
      .subscribe(
        response => { console.log(response); },
        error =>  console.log(error)
      );
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

}
