import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../servises/api.service';

@Injectable({
  providedIn: 'root'
})
export class LogInGuardGuard implements CanActivate {
  constructor(private router: Router , private login: ApiService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.login.userStatus) {
      console.log('222');
      return true;
    } else {
      this.router.navigate(['log-in']); 
      return false;
    }
  }
}



