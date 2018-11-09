import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { HostComponent } from './pages/host/host.component';
import { BecomeAHostComponent } from './pages/become-a-host/become-a-host.component';

// Routes
const routes: Routes = [
  { path: "", redirectTo: "/signup", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "host", component: HostComponent },
  { path: "become-a-host", component: BecomeAHostComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
