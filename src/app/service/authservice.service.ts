import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  // se crea con ionic g service service/authservice

  private apiURL = 'http://127.0.0.1:5000';
  private userData: any; //Almacena los datos de usuario

  private httpOptions =
  {
    headers : new HttpHeaders
    (
      {
        'Content-Type':'application/json'
      }
    )
  }

  private authenticated = false;

  constructor(private httpClient: HttpClient) { }
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
