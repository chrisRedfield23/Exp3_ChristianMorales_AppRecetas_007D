import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegetarianoPage } from './vegetariano.page';

const routes: Routes = [
  {
    path: '',
    component: VegetarianoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegetarianoPageRoutingModule {}
