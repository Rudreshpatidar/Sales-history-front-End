
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesModel } from '../models/sales-model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private baseUrl = "http://localhost:8084/api/v1/sales";

  constructor(private httpClient: HttpClient) { }


  getAllSales(): Observable<SalesModel[]> {
    return this.httpClient.get<SalesModel[]>(`${this.baseUrl}/all`);
  }

  getSalesByDate(date: Date): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/date/${date}`);
  }

  getAllSalesByQuarter(quarter: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/quarter/${quarter}`);
  }

  getSalesQuantitySoldByCategoryWise(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/qtys/categorywise`);
  }

  // getSaleById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/${id}`);
  // }

  // updateSales(id: number, updatedSales: any): Observable<any> {
  //   return this.http.put<any>(`${this.baseUrl}/${id}`, updatedSales);
  // }

  getSalesQuantitySoldByCategoryWiseByYear(year: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/qtys/categorywise/${year}`);
  }

  getSumOfAmountSoldForSalesByCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/sold/categorywise`);
  }

  // deleteSale(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.baseUrl}/${id}`);
  // }

  getSumOfAmountSoldForSalesByCategoriesByYear(year: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/sold/categorywise/${year}`);
  }
}



