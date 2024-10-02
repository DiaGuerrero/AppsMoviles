import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  // se crea con ionic g service service/authservice

  private authenticated = false;

  constructor() { }
  isLoggedIn(){
    return this.authenticated; // Estado que retornara la clase
  }

  login(){
    this.authenticated = true; // cambia estado si el login es exitoso
  }

  logout(){
    this.authenticated = false; // cambia estado para salir de la app
  }
}
