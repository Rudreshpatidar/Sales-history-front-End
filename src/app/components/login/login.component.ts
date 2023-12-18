import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserHttpService } from '../../service/user-http.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  newUser: User = {
    userId: 0,
    userName: "",
    userPassword: "",
    allRolesPojo: []
  }
 
  errorMessage: string = '';
 
  constructor(private userHttpService: UserHttpService,
              private authService: AuthService,
              private router: Router){}
 
  login(){
    // validate the username password by
    // consuming endpoint in service layer
    this
      .userHttpService
      .validate(this.newUser)
      .subscribe((response)=>{
        // means user name and password is correct
        console.log(response);
        // store the response (user object) in sessionStorage
        this.authService.storeUser(response.user);
        this.authService.isLoggedIn = true;
        console.log(this.authService.isLoggedIn)
        this.authService.storeToken(response.token)
        this.router.navigate(['home']);
      },
      (error)=>{
        console.log(error);
        this.errorMessage = error.error.errorMessage
      });
    }
 

}
