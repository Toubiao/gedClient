import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const access_token = localStorage.getItem("access_token");

    console.log(access_token);
    if (access_token) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + access_token)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }
}
