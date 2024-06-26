import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/User';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user/profile`);
  }
}
