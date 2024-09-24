import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContProfesorPage } from './cont-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ContProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContProfesorPageRoutingModule {}
