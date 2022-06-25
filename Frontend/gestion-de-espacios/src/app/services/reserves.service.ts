import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {

  private baseUrl: string

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/reserves'
  }

  getAllReserves(): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrl))
  }

  getReserveById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}${pId}`))
  }

  createReserve(pForm: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, pForm))
  }

  updateReserve(pForm: any, pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}${pId}`, pForm))
  }

  deleteReserve(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${pId}`))
  }

  getReservesByUserId(pId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/user/${pId}`))
  }

  getReservesBySpaceId(pId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/space/${pId}`))
  }

  getReservesByDate(pDate: string): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}`))
  }

  getReservesByDateAndSpaceId(pDate: string, pSpaceId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}/space/${pSpaceId}`))
  }

  getReservesByDateAndUserId(pDate: string, pUserId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}/user/${pUserId}`))
  }

  getReservesByDateAndSpaceIdAndUserId(pDate: string, pSpaceId: number, pUserId: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}/space/${pSpaceId}/user/${pUserId}`))
  }

  getReservesByDateAndSpaceIdAndUserIdAndStatus(pDate: string, pSpaceId: number, pUserId: number, pStatus: string): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}/date/${pDate}/space/${pSpaceId}/user/${pUserId}/status/${pStatus}`))
  }




}
