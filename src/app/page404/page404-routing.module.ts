import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Page } from './page404.page';

const routes: Routes = [
  {
    path: '', // se crea el page con ionic g page page404
    component: Page404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page404PageRoutingModule {}
