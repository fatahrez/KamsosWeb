import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule
  ]
})
export class SharedModule { }
