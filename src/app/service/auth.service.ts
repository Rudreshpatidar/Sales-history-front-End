import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn: boolean = false;
 
  storeUser(user: User){
    // store the user object in the session storage
    sessionStorage.setItem("userInfo", JSON.stringify(user));
  }
 
  retrieveUser(){
      let userString: any = sessionStorage.getItem("userInfo");
      let user = JSON.parse(userString);      
      return user;
  }
 
  removeUser(){
    sessionStorage.removeItem("userInfo");
  }
 
  storeToken(token: string){
    // store the user object in the session storage
    sessionStorage.setItem("tokenInfo", token);
  }
 
  retrieveToken(){
      let token: any = sessionStorage.getItem("tokenInfo");
      return token;
  }
 
  removeToken(){
    sessionStorage.removeItem("tokenInfo");
  }
}
