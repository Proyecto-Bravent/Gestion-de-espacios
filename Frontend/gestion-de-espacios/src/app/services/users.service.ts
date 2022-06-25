import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  baseUrl: string

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/'
  }

  login(pForm: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const res = this.httpClient.post<any>(this.baseUrl + 'login', pForm, httpOptions)
    return res
  }

  register(pForm: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'register', pForm))
  }

  // Get users by Id & all users

  getById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + "profile/" + pId))
  }

  getAll(): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrl + '/profiles'))
  }

  // Reset Password

  resetPassword(pForm: any, pId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    const res = this.httpClient.put<any>(this.baseUrl + 'resetPassword/' + pId, pForm, httpOptions)
    return res
  }

  // myUser

  myUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'myprofile', httpOptions))
  }

  // edit user

  editUser(pForm: any, pId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    const res = this.httpClient.put<any>(this.baseUrl + pId, pForm, httpOptions)
    return res
  }

  // delete user

  deleteUser(pId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    const res = this.httpClient.delete<any>(this.baseUrl + 'profile/' + pId, httpOptions)
    return res
  }
}






