import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users/'
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


  // Get users

  // Id

  getById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + "profile/" + pId));
  }

  // All

  getAll(): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrl + '/profiles'));
  }

  // Reset Password

  resetPassword(pForm: any, pId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    const response = this.httpClient.put<any>(this.baseUrl + 'resetPassword/' + pId, pForm, httpOptions)
    return response
  }

  // myUser

  myUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    console.log(localStorage.getItem('token'))
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'myprofile', httpOptions));
  }

  // edit user

  editUser(pForm: FormData, pId: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }

    return lastValueFrom(this.httpClient.put<any>(this.baseUrl + 'profile/edit', pForm, httpOptions))
  }
}






