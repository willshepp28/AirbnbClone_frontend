import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/authentication/auth.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, RouterEvent } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.titleService.setTitle( "blah blah blah" );
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
         while (route.firstChild) {
           route = route.firstChild;
         }
         return route;
        })
      )
      .pipe(
        filter((route) => route.outlet === "primary"),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => this.titleService.setTitle(event["title"]));
  }



  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

}
