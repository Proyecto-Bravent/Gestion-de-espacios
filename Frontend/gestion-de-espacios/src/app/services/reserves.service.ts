import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReservesService {

  private baseUrl: string

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/reserves'
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
    return this.httpClient.post<any>(this.baseUrl, pForm)
  }

  // Actualiza reserva

  updateReserve(pForm: any, pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}${pId}`, pForm))
  }

  // Borra reserva

  deleteReserve(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${pId}`))
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

  // Coge reservas por fecha y espacio

  getReservesByDateAndSpaceId(pDate: string, pSpaceId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}/space/${pSpaceId}`))
  }

  // Coge reservas por fecha y usuario

  getReservesByDateAndUserId(pDate: string, pUserId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}/user/${pUserId}`))
  }

  // Coge reservas por fecha, espacio y usuario

  getReservesByDateAndSpaceIdAndUserId(pDate: string, pSpaceId: number, pUserId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}/space/${pSpaceId}/user/${pUserId}`))
  }

  // Coge reservas por fecha, espacio, usuario y status

  getReservesByDateAndSpaceIdAndUserIdAndStatus(pDate: string, pSpaceId: number, pUserId: number, pStatus: boolean): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}/space/${pSpaceId}/user/${pUserId}/status/${pStatus}`))
  }
}
