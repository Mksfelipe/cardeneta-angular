import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token-cardeneta');

        if (token) {
            const authReq = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });

            return next.handle(authReq);
        }
        console.log(token)
        return next.handle(req);
    }

}