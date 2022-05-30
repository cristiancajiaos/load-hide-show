import { RequestsService } from './../services/requests.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class HandleRequestInterceptor implements HttpInterceptor {

  constructor(
    private requestsService: RequestsService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.requestsService.setRequest('start');
    return next.handle(request).pipe(
      finalize(() => {
        this.requestsService.setRequest('end');
      })
    );
  }
}
