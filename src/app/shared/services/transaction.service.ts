import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionList } from 'src/app/core/models/TransactionList';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransaction(currentPage: number): Observable<TransactionList> {
    const params = new HttpParams()
    .set('page', currentPage)
    return this.http.get<TransactionList>(`${environment.apiUrl}/user/profile/transanctions`, { params });
  }

 
}
