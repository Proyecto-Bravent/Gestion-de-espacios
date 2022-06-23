import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string
  baseUrlUsers: string


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/bravent/'
    this.baseUrlUsers = 'http://localhost:3000/api/users/'

  }

  login(pForm: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>(this.baseUrl + 'login', pForm, httpOptions)
  }

  register(pForm: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'register', pForm))
  }




}




