import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getNamePhoto()
      .subscribe(
        response => { console.log(response); this.name = response[0].first_name; },
        error =>  console.log(error)
      );
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

}
