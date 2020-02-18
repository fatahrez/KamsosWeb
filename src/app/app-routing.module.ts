import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CheckoutComponent} from './checkout/checkout/checkout.component';

const routes: Routes = [
  {
    path: 'vet',
    loadChildren: './vets/vets.module#VetsModule'
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
