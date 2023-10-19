import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getRoles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/roles`);
  }
}
