import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ResourcesComponent } from './resources/resources.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';

const resourcesRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'resources',
    component: ResourcesComponent
  }
]);

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    resourcesRouting,
    SharedModule,
    MaterialModule
  ]
})
export class ResourcesModule { }
