import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';

const contactRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'contact',
    component: ContactComponent
  }
]);

@NgModule({
  declarations: [ContactComponent],
  imports: [
    contactRouting,
    SharedModule,
    MaterialModule
  ]
})
export class ContactModule { }
