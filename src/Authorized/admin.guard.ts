import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private rou: Router) { }

  canActivate(): boolean {
    if (this.auth.getislogin() == true) {
      return true;
    }
    else {
      window.alert("You don't have permission to this Page");
      this.rou.navigateByUrl('/login');
      return false;
    }

  }

}
