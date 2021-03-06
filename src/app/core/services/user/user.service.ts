import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/api/v1/user/";

  constructor(
    private http: HttpClient
  ) { }

  getNamePhoto() {
    return this.http.get<any>(this.url + "name-photo");
  }
}
