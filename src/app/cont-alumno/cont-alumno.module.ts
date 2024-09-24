import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContAlumnoPageRoutingModule } from './cont-alumno-routing.module';

import { ContAlumnoPage } from './cont-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContAlumnoPageRoutingModule
  ],
  declarations: [ContAlumnoPage]
})
export class ContAlumnoPageModule {}
