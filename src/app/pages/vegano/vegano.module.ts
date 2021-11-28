import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeganoPageRoutingModule } from './vegano-routing.module';

import { VeganoPage } from './vegano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeganoPageRoutingModule
  ],
  declarations: [VeganoPage]
})
export class VeganoPageModule {}
