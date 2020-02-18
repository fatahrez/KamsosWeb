import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule} from '@angular/common';

import { VetsComponent } from './vets/vets.component';
import { SharedModule } from '../shared';
import { VetResolverService } from './vets/vet-resolver.service';
import { VetRoutingModule } from './vets/vet-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import {RouterModule} from '@angular/router';

const checkoutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'checkout',
    component: CheckoutComponent,
  }
]);

@NgModule({
  declarations: [VetsComponent, CheckoutComponent],
  imports: [
    SharedModule,
    VetRoutingModule,
    CommonModule,
    checkoutRouting,
  ],
  providers: [
    VetResolverService
  ]
})
export class VetsModule { }
