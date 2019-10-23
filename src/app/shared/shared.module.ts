import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ListErrorsComponent } from './list-errors/list-errors.component';

import { MaterialModule } from '../material';
import { ShowAuthedDirective } from './show-authed.directive';
import { VetListComponent } from './vet-helpers/vet-list/vet-list.component';
import { VetPreviewComponent } from './vet-helpers/vet-preview/vet-preview.component';
import { VetMetaComponent } from './vet-helpers/vet-meta/vet-meta.component';

@NgModule({
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    VetListComponent,
    VetPreviewComponent,
    VetMetaComponent
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
    ShowAuthedDirective,
    VetListComponent
  ],
  providers: []
})
export class SharedModule { }
