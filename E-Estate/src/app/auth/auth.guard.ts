import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { SpinnerService } from '../_services/spinner.service';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {



constructor(private authService:AuthService){
}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  if(this.authService.isLoggedIn()){
    return true;
  }
  this.authService.startAuthentication();
  return false;
}
}
