import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContProfesorPageRoutingModule } from './cont-profesor-routing.module';

import { ContProfesorPage } from './cont-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContProfesorPageRoutingModule
  ],
  declarations: [ContProfesorPage]
})
export class ContProfesorPageModule {}
