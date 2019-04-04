import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgrilyticsStoreModule } from './store/agrilytics-store.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AuthHeadersInterceptor } from './interceptors/auth-headers.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AgrilyticsStoreModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptor, multi: true },
  ],
})
export class AgrilyticsCoreModule { }
