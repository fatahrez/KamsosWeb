import { RouterModule, Routes } from '@angular/router';
import { VetsComponent } from './vets.component';
import { NgModule } from '@angular/core';
import { VetResolverService } from './vet-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: VetsComponent,
    resolve: {
      vet: VetResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [VetResolverService]
})
export class VetRoutingModule { }
