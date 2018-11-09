import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }


  redirectToHost() {
    this.route.navigate(["/become-a-host"]);
  }
}
