import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatButtonModule,
    // MatCheckboxModule
  ],
  exports:[
    MatButtonModule,
    // MatCheckboxModule,
  ],
})
export class MaterialModule {}
