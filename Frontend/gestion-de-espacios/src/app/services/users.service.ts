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

  // Loggin del usuario

  login(pForm: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const res = this.httpClient.post<any>(this.baseUrl + 'login', pForm, httpOptions)
    return res
  }

  // Register

  register(pForm: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'register', pForm))
  }

  // Mi usuario solo autorizados

  myUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'myprofile', httpOptions))
  }

  // Traigo usuarios por Id

  getById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + "profile/" + pId))
  }

  // Traigo todos los usuarios

  getAll(): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrl + '/profiles'))
  }

  // Resetear contraseña solo autorizados

  resetPassword(pForm: any, pId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    const res = this.httpClient.put<any>(this.baseUrl + 'resetPassword/' + pId, pForm, httpOptions)
    return res
  }

  // Editar usuario solo los autorizados

  editUser(pForm: any, pId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    const res = this.httpClient.put<any>(this.baseUrl + pId, pForm, httpOptions)
    return res
  }

  // Borrar usuario solo los autorizados

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






