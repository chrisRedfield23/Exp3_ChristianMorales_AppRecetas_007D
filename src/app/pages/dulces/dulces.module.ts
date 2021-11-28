import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DulcesPageRoutingModule } from './dulces-routing.module';

import { DulcesPage } from './dulces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DulcesPageRoutingModule
  ],
  declarations: [DulcesPage]
})
export class DulcesPageModule {}
