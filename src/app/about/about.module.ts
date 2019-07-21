import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'about',
    component: AboutComponent
  }
]);

@NgModule({
  declarations: [AboutComponent],
  imports: [
    aboutRouting,
    SharedModule,
    MaterialModule
  ]
})
export class AboutModule { }
