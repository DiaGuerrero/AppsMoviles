import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {
  cursos = [
    { nombre: 'Aplicaciones Móviles', profesor: 'Jhon Salchishon' }, 
    { nombre: 'Robotica', profesor: 'Jhon Salchishon' }, 
    { nombre: 'Base de Datos', profesor: 'Jhon Salchishon' }, 
    { nombre: 'Programacion de Base de Datos', profesor: 'Jhon Salchishon' }, 
    { nombre: 'Arquitectura', profesor: 'Jhon Salchishon' }, 
    { nombre: 'Iniciacion Machine Learning', profesor: 'Jhon Salchishon' }, 
    { nombre: 'Ingles', profesor: 'Jhon Salchishon' }, 
    { nombre: 'Proceso de Portafolio', profesor: 'Jhon Salchishon' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verDetallesCurso(curso: any) {
    // Navega a la página de QR del profesor
    this.router.navigate(['/cont-profesor'], {
      queryParams: { curso: curso.nombre }
    });
  }

}
