import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgrovetComponent } from './agrovet/agrovet.component';
import {RouterModule} from '@angular/router';


const agrovetRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'agrovet',
    component: AgrovetComponent
  }
]);

@NgModule({
  declarations: [AgrovetComponent],
  imports: [
    CommonModule,
    agrovetRouting,
  ]
})
export class AgrovetModule { }
