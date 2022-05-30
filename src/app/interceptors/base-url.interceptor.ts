import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  baseUrl = environment.baseUrl;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let updatedRequest = this.updateRequest(request);
    return next.handle(updatedRequest);
  }

  updateRequest(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({
      url: `${this.baseUrl}${request.url}`
    });
  }
}
