import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profilePic = "https://s3.us-east-2.amazonaws.com/ig-clone2019/profilePic/profileplaceholder.png";

  constructor() { }

  ngOnInit() {
  }

  isAuthenticated() {
    return false;
  }

}
