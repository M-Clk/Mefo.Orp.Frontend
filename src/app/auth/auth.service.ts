import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  httpClient = inject(HttpClient);
  baseUrl = 'https://localhost:7076/api';

  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/Login/register`, data);
  }

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/Login/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  logout() {
      localStorage.removeItem('authUser');
  }

  isLoggedIn() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('authUser') !== null;
    }
    else{
      return false;
    }
  }
}
