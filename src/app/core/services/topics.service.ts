import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TopicsApiResponse } from '../interfaces/topic';
@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTopics(): Observable<TopicsApiResponse> {
    return this.http.get<TopicsApiResponse>(`${this.apiUrl}/topics`);
  }
}
