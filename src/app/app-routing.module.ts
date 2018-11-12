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
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PlacesComponent } from './pages/places/places.component';
import { CitiesComponent } from './pages/places/cities/cities.component';
import { DuplicateComponent } from './pages/become-a-host/duplicate/duplicate.component';

// Routes
const routes: Routes = [
  { path: "", redirectTo: "/signup", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { title: "Vacation Rentals, Homes, Experiences & Places - Airbnb"}},
  { path: "login", component: LoginComponent, data: { title: "Vacation Rentals, Homes, Experiences & Places - Airbnb"} },
  { path: "signup", component: SignupComponent, data: { title: "Vacation Rentals, Homes, Experiences & Places - Airbnb"} },
  { path: "host", component: HostComponent, data: { title: "Rent out your house, apartment or room on Airbnb"} },
  { path: "become-a-host", component: BecomeAHostComponent, canActivate: [AuthGuardGuard],
  data: { title: "Become a Host and Rent Out Your Room, House or Apartment on Airbnb"},
  children: [
    { path: "duplicate", component: DuplicateComponent }
  ] },
  { path: "saved", component: SavedComponent, canActivate: [AuthGuardGuard], data: { title: "Wish Lists"} },
  { path: "trips", component: TripsComponent, canActivate: [AuthGuardGuard], data: { title: "Trips - Airbnb"} },
  { path: "edit-profile", component: EditProfileComponent, canActivate: [AuthGuardGuard], data: { title: "Edit Profile"}},
  { path: "places", component: PlacesComponent, data: { title: "Places - Airbnb"},
    children: [
      { path: "cities/:name", component: CitiesComponent }
    ]
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
