import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cont-alumno',
  templateUrl: './cont-alumno.page.html',
  styleUrls: ['./cont-alumno.page.scss'],
})
export class ContAlumnoPage implements OnInit {

  constructor(private router: Router) { }
  navegar(){
    this.router.navigate(['/qr-alumno']);
  }
  ngOnInit() {
  }

}
