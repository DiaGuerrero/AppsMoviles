import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrProfesorPageRoutingModule } from './qr-profesor-routing.module';

import { QrProfesorPage } from './qr-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrProfesorPageRoutingModule
  ],
  declarations: [QrProfesorPage]
})
export class QrProfesorPageModule {}
