import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  [x: string]: any;
  baseUrl: string = "http://localhost:8080/api/login";
  constructor(private httpClient: HttpClient) { }
 
  validate(newUser: User): Observable<Auth>{
    return this.httpClient.post<Auth>(this.baseUrl, newUser);
  }
}
