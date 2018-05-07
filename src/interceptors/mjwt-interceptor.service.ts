import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SessionProvider } from '../providers/session/session';

@Injectable()
export class MjwtInterceptor implements HttpInterceptor {
    constructor(public session: SessionProvider) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `${this.session.getCurrentToken()}`
            }
        });
        return next.handle(request);
    }
}