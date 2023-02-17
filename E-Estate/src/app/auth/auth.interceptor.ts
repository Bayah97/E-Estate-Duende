import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, from, Observable, switchMap, tap, throwError } from "rxjs";
import { AuthService } from "../_services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router:Router, private authService:AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        var token = localStorage.getItem('AccessToken');
        // token invalid
        if (token && this.authService.tokenExpired(token)) {
          console.log("token invalid")
          return next.handle(request).pipe(
            catchError(error =>{
              if(error.status === 401){
                console.log('token has expired')
                return from(this.authService.refreshToken()).pipe(
                  switchMap(token => {
                    localStorage.removeItem('AccessToken');
                    localStorage.setItem('AccessToken', token);
                    request = request.clone({
                      setHeaders:{
                        'Access-Control-Allow-Origin': '*',
                        Authorization: `Bearer ${token}`,
                      }
                    });
                    return next.handle(request);
                  })
                )
              }
              else{
                return throwError(error);
              }
            })
          );
        }
        //token valid
        else{
          console.log("token valid")
          request = request.clone({
            setHeaders:{
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${token}`
            }
          });
        }
        return next.handle(request)
        }
}