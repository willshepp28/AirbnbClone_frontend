import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

// Routes
const routes: Routes = [
  { path: "", redirectTo: "/signup", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
