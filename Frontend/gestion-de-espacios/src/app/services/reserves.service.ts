import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReservesService {

  private baseUrl: string

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'https://localhost:7188/api/reserves'
  }

  // Coge todas las reservas

  getAllReserves(): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrl + '/all'))
  }

  // Coge reserva por id

  getReserveById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}${pId}`))
  }

  // Crea reserva

  createReserve(pForm: any): Observable<any> {
    const res = this.httpClient.post<any>(this.baseUrl, pForm)
    return res
  }

  filteredReserve(pDate: string): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrl + '/reserveday/' + pDate));
  }

  // Actualiza reserva solo los autorizados

  updateReserve(pForm: any, pId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    const res = this.httpClient.put<any>(`${this.baseUrl}${pId}`, pForm, httpOptions)
    return res
  }

  // Borra reserva solo los autorizados

  deleteReserve(pId: number): Promise<any> {
    const httpOtions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${pId}`, httpOtions))
  }

  // Coge reservas por usuario

  getReservesByUserId(pId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/user/${pId}`))
  }

  // Coge reservas por status

  getReservesByStatus(pStatus: boolean): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/status/${pStatus}`))
  }

  // Coge reservas por espacio

  getReservesBySpaceId(pId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/space/${pId}`))
  }

  // Coge reservas por fecha

  getReservesByDate(pDate: string): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}`))
  }

}


// Si va a reservar un puesto tiene que salir el dia de la reserva
// Si es sala de reuniones solo sale la hora de la reserva