import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-alumno',
  templateUrl: './qr-alumno.page.html',
  styleUrls: ['./qr-alumno.page.scss'],
})
export class QrAlumnoPage  {

  constructor(private router: Router) {}
  //Metodo que permite navergar como si fuera un HREF
  navegar(){
    this.router.navigate(['/home']);
  }

  

}
