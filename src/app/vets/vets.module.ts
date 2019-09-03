import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { VetsComponent } from './vets/vets.component';
import { SharedModule } from '../shared';
import { VetResolverComponent } from './vets/vet-resolver/vet-resolver.component';

const vetsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'vets',
    component: VetsComponent
  }
]);

@NgModule({
  declarations: [VetsComponent, VetResolverComponent],
  imports: [
    vetsRouting,
    CommonModule,
    SharedModule
  ]
})
export class VetsModule { }
