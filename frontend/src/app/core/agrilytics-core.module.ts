import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgrilyticsStoreModule } from './store/agrilytics-store.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AuthHeadersInterceptor } from './interceptors/auth-headers.interceptor';
import { AgrilyticsMaterialModule } from '../agrilytics-material.module';

const components = [
  NavbarComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HttpClientModule,
    AgrilyticsStoreModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptor, multi: true },
  ],
  exports: [...components]
})
export class AgrilyticsCoreModule { }
