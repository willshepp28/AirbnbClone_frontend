import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { HostComponent } from './pages/host/host.component';
import { BecomeAHostComponent } from './pages/become-a-host/become-a-host.component';
import { AuthGuardGuard } from './core/guards/auth-guard/auth-guard.guard';
import { SavedComponent } from './pages/saved/saved.component';
import { TripsComponent } from './pages/trips/trips.component';

// Routes
const routes: Routes = [
  { path: "", redirectTo: "/signup", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { title: "Vacation Rentals, Homes, Experiences & Places - Airbnb"}},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "host", component: HostComponent, data: { title: "Rent out your house, apartment or room on Airbnb"} },
  { path: "become-a-host", component: BecomeAHostComponent, canActivate: [AuthGuardGuard],
  data: { title: "Become a Host and Rent Out Your Room, House or Apartment on Airbnb"} },
  { path: "saved", component: SavedComponent, canActivate: [AuthGuardGuard] },
  { path: "trips", component: TripsComponent, canActivate: [AuthGuardGuard], data: { title: "Trips - Airbnb"} }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
