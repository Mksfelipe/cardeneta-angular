import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = localStorage.getItem('token-cardeneta');
    console.log(isLoggedIn  )
    if (isLoggedIn === null) { // Checking if token exists
      this.router.navigate(['/login']); // Redirecting to login even if logged in
      return false; // Prevent navigation to the route
    }
  
    return true; // Allow navigation to the route
  }
}