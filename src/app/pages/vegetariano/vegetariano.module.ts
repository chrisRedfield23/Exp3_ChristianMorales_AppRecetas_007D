import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegetarianoPageRoutingModule } from './vegetariano-routing.module';

import { VegetarianoPage } from './vegetariano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegetarianoPageRoutingModule
  ],
  declarations: [VegetarianoPage]
})
export class VegetarianoPageModule {}
