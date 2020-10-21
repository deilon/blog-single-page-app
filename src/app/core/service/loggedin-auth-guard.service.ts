import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authService.isAuthenticated()) {
            this.router.navigate(['/profile']);
            return false;
        }
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

}