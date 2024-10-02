import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service'; // importamos la clase recien creada llamada authservice
import { Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthserviceService);
  const router = inject(Router)
  
  if(authService.isLoggedIn()){
    return true;
  }else{
    return router.createUrlTree(['/login']);
  }
};
