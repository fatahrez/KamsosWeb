import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule} from '@angular/common';

import { VetsComponent } from './vets/vets.component';
import { SharedModule } from '../shared';
import { VetResolverService } from './vets/vet-resolver.service';
import { VetRoutingModule } from './vets/vet-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [VetsComponent, CheckoutComponent],
  imports: [
    SharedModule,
    VetRoutingModule,
    CommonModule
  ],
  providers: [
    VetResolverService
  ]
})
export class VetsModule { }
