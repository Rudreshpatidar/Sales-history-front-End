
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesModel } from '../models/sales-model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private baseUrl = "http://localhost:8084/api/v1/sales";

  constructor(private httpClient: HttpClient) { 
  }
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

  getSalesQuantitySoldByCategoryWiseByYear(year: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/qtys/categorywise/${year}`);
  }

  getSumOfAmountSoldForSalesByCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/sold/categorywise`);
  }

  getSumOfAmountSoldForSalesByCategoriesByYear(year: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/sold/categorywise/${year}`);
  }
}



