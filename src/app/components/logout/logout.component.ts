import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private authService: AuthService,
    private router: Router){}
ngOnInit(){
// remove user object from session storage
this.authService.removeUser();
// set isLoggedIn to false in authService
this.authService.isLoggedIn = false;
// navigate to login
this.router.navigate(['/login']);
 
}
}
