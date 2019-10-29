import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    LayoutModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    CdkTreeModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    LayoutModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    CdkTreeModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule {}
