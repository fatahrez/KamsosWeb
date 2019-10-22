import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ModuleWithProviders} from '@angular/core';
import { RouterModule } from '@angular/router';

import { VetsComponent } from './vets/vets.component';
import { SharedModule } from '../shared';

// const vetsRouting: ModuleWithProviders = RouterModule.forChild([
//   {
//     path: 'vets',
//     component: VetsComponent
//   }
// ]);

@NgModule({
  declarations: [VetsComponent],
  imports: [
    // vetsRouting,
    CommonModule,
    SharedModule
  ]
})
export class VetsModule { }
