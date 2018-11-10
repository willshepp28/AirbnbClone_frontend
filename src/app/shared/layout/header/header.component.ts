import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated: boolean;
  // {email: "bobby@gmail.com", firstname: "Bobby", lastname: "Schumber", password: "11111", birthdate: "1977-02-16"}

  profilePic = "https://s3.us-east-2.amazonaws.com/ig-clone2019/profilePic/profileplaceholder.png";

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
  }

}
