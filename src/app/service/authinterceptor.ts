import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { LoginService } from "./login.service";
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class Authinterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService)
    {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    

        let newReq = req;
        let token = this.loginService.getToken();

        console.log("INTERCEPTOR ", token);

        if(token != null)
        {
         newReq =  newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
       
        }
        
        return next.handle(newReq);

    }  
   
}

export const authinterceptorProviders=[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: Authinterceptor,
        multi: true,
    }
];