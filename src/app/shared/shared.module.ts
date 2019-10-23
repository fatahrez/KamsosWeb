import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ListErrorsComponent } from './list-errors/list-errors.component';

import { MaterialModule } from '../material';
import { ShowAuthedDirective } from './show-authed.directive';
import { VetListComponent } from './vet-helpers/vet-list/vet-list.component';

@NgModule({
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    VetListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ],
  providers: []
})
export class SharedModule { }
