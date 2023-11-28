
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})

export class adminGuard implements CanActivate{

  constructor(private loginService:LoginService,private router:Router)
  {

  }

  canActivate
  (route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
      if(this.loginService.isLoggedIn() && this.loginService.getUserRole() =='ROLE_ADMIN')
      {
        return true;
      }

      this.router.navigate(['login'])
   
      return false;
  }
  
}
