import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ListErrorsComponent } from '../shared';

import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared'; 

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
]);

@NgModule({
  declarations: [AuthComponent],
  imports: [
    authRouting,
    SharedModule,
    // CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers:[]
})
export class AuthModule { }
