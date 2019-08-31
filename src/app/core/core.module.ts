import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import {
  ApiService,
  JwtService,
  RequestService,
  UserService,
  VetsService,
} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    JwtService,
    UserService,
    RequestService,
    VetsService
  ]
})
export class CoreModule { }
