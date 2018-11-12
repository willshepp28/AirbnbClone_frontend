import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './/app-routing.module';

// Interceptors
import { TokenInterceptorService } from './core/interceptors/token-interceptor/token-interceptor.service';

// Components
import { AppComponent } from './app.component';
import { AuthService } from './core/authentication/auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { BecomeAHostComponent } from './pages/become-a-host/become-a-host.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HostComponent } from './pages/host/host.component';
import { AuthGuardGuard } from './core/guards/auth-guard/auth-guard.guard';
import { SavedComponent } from './pages/saved/saved.component';
import { TripsComponent } from './pages/trips/trips.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { CityService } from './core/places/city/city.service';
import { PlacesComponent } from './pages/places/places.component';
import { CitiesComponent } from './pages/places/cities/cities.component';
import { DuplicateComponent } from './pages/become-a-host/duplicate/duplicate.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BecomeAHostComponent,
    HeaderComponent,
    FooterComponent,
    HostComponent,
    SavedComponent,
    TripsComponent,
    EditProfileComponent,
    PlacesComponent,
    CitiesComponent,
    DuplicateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    CityService,
    AuthGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
