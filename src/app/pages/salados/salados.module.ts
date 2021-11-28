import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaladosPageRoutingModule } from './salados-routing.module';

import { SaladosPage } from './salados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladosPageRoutingModule
  ],
  declarations: [SaladosPage]
})
export class SaladosPageModule {}
