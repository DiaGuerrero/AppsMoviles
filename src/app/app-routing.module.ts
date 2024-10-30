import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardGuard } from './guard/guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) 
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then( m => m.ProfesorPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'cont-profesor',
    loadChildren: () => import('./cont-profesor/cont-profesor.module').then( m => m.ContProfesorPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'cont-alumno',
    loadChildren: () => import('./cont-alumno/cont-alumno.module').then( m => m.ContAlumnoPageModule),
    canActivate: [guardGuard]
  },
  {
    path: '**', // se agrega el doble * para que consulte todas las rutas, si no coincide vuelve al page
    loadChildren: () => import('./page404/page404.module').then( m => m.Page404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
