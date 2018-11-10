import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url = "http://localhost:3000/api/v1/cities/";

  constructor(
    private http: HttpClient
  ) { }


  getRandomCities() {
    return this.http.get<any>(this.url + "random");
  }

  getCity(place) {
    return this.http.get<any>(this.url + place);
  }
}
