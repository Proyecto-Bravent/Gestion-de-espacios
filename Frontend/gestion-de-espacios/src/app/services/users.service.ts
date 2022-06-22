import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'http://localhost:4200/'

  constructor(private httpClient: HttpClient) { }

  register(pForm: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'register', pForm))
  }

  login(pForm: any): Promise<User> {
    return lastValueFrom(this.httpClient.post<User>(this.baseUrl + 'login', pForm))
  }



}
