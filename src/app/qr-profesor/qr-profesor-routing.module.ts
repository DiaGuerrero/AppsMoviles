import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrProfesorPage } from './qr-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: QrProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrProfesorPageRoutingModule {}
