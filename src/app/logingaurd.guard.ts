import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';

// export const logingaurdGuard: CanActivateFn = (route, state) => {
//   return true;
@Injectable({
  providedIn: 'root'
})

export class LoginGaurd{
constructor(private authService: AuthService,
  private router: Router){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
if(this.authService.isLoggedIn){
return true;
}else{
this.router.navigate(['login']);
}
return this.authService.isLoggedIn;
}
};
