import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    public authorization: boolean;


  constructor(private router: Router) {
  }
  userSingIn() {
      this.authorization = true;
  }

  canActivate(): boolean {
    if (this.authorization === true) {
        return true;
    }
    this.router.navigate(['home']);
    return false;
  }

}
