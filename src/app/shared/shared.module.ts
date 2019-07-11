import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { MaterialModule } from '../material';
// import { FooterComponent } from './layout/footer/footer.component';
// import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    // FooterComponent,
    // HeaderComponent
    ListErrorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true, },
  ]
})
export class SharedModule { }
