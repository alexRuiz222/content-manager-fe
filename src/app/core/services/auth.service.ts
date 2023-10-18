import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginForm } from 'src/app/core/models/login-form.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // login function
  login(loginForm: LoginForm): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, loginForm);
  }

  //set token to localstorage
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  isLoggedIn() {
    const token = localStorage.getItem('token') || '';
    const payload = atob(token.split('.')[1]);
    const parsePayload = JSON.parse(payload);
    return parsePayload.exp > Date.now() / 1000;
  }
}
