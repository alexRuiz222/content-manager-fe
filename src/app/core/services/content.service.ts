import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ContentApiRepsonse } from '../interfaces/content';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getContentList(
    group = false,
    TopicId: number
  ): Observable<ContentApiRepsonse> {
    let params = new HttpParams();
    params = params.set('TopicId', TopicId);
    params = params.set('group', group.toString());
    const options = {
      params,
    };
    return this.http.get<ContentApiRepsonse>(
      `${this.apiUrl}/contents`,
      options
    );
  }

  createContent(formData: FormData) {
    return this.http.post(`${this.apiUrl}/contents`, formData);
  }
}
