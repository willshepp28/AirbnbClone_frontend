import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.css']
})
export class DuplicateComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }


  next(){
    this.router.navigate([]);
  }

}
