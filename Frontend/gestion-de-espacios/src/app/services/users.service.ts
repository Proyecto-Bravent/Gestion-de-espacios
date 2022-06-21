import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:4200/'
  }

  login(pForm: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>(this.baseUrl + 'login', pForm, httpOptions)
  }



}
