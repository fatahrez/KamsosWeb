import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';

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
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],

  providers:[]
})
export class AuthModule { }
