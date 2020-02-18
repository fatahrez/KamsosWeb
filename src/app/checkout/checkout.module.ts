import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import {RouterModule} from '@angular/router';

const checkoutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'checkout',
    component: CheckoutComponent,
  }
]);

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    checkoutRouting,
  ]
})
export class CheckoutModule { }
