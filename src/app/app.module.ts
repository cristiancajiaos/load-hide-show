import { HandleRequestInterceptor } from './interceptors/handle-request.interceptor';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ErrorHandleInterceptor } from './interceptors/error-handle.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandleInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: HandleRequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
