import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(cpf: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signin`, { cpf, password })
      .pipe(map(response => response.token));
  }
}
