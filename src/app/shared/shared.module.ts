import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ListErrorsComponent } from './list-errors/list-errors.component';

// import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { MaterialModule } from '../material';
import { ShowAuthedDirective } from './show-authed.directive';
// import { FooterComponent } from './layout/footer/footer.component';
// import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    // FooterComponent,
    // HeaderComponent
    ListErrorsComponent,
    ShowAuthedDirective
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
    // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true, },
  ]
})
export class SharedModule { }
