import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { authPaths } from '../settings/apiSettings';
import { Injectable } from '@angular/core';



@Injectable({ providedIn: "root" })

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url === authPaths.registerUser || req.url === authPaths.logInUser) {
            return next.handle(req).pipe(tap(evnt => {
                if (evnt instanceof HttpResponse && evnt.body["isSuccessfull"]) {
                    this.authService.storeToken(evnt.body["authToken"])
                }
            }));
        }
        
        if(this.authService.isAuthenticated() && this.authService.getUserInfo().exp<=Date.now()){
            this.authService.clearUserData();
        }
        if (this.authService.isAuthenticated()) {
            return next.handle(req.clone({
                setHeaders: { Authorization: `Bearer ${this.authService.getToken()}` }
            }))
        }

        return next.handle(req);
    }
}