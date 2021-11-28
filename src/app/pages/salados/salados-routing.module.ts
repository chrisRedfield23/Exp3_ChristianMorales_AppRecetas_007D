import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaladosPage } from './salados.page';

const routes: Routes = [
  {
    path: '',
    component: SaladosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladosPageRoutingModule {}
