import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material';

import {
  ApiService,
  SharedModule,
  FooterComponent,
  HeaderComponent,
  UserService,
  JwtService,
  // HttpTokenInterceptor
} from './shared';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    MaterialModule,
    rootRouting,
  ],
  providers: [
    ApiService,
    UserService,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
