import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { NoAuthGuardService } from './no-auth-guard.service';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuardService]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuardService]
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

  providers: [
    NoAuthGuardService
  ]
})
export class AuthModule { }
