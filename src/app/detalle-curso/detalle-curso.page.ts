import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumoApiService } from '../service/consumo-api.service';
import * as qrcode from 'qrcode-generator';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {
  
  idCurso : string = ""
  nombreCurso : string = ""
  codigoCurso : string = ""
  seccionCurso : string = ""
  qrDataURL : string = ""

  alumnos : any[] = [];
  

  constructor(private consumoApi: ConsumoApiService, private activateroute: ActivatedRoute, private router: Router) { 
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombreCurso = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.idCurso = this.router.getCurrentNavigation()?.extras.state?.['id'];
        this.codigoCurso = this.router.getCurrentNavigation()?.extras.state?.['codigo'];
        this.seccionCurso = this.router.getCurrentNavigation()?.extras.state?.['seccion'];

        console.log('ID Curso:', this.idCurso);
        console.log('ID Profesor:', 1); // Cambia el valor del profesor según sea necesario
      }
    });
  }


  mostrarAlumnos(){

    const profesorId = 1;
    const cursoId = Number(this.idCurso);

    if (profesorId && cursoId) {
      this.consumoApi.obtenerAlumnosCurso(profesorId, cursoId).subscribe(
        (respuesta) => {
        this.alumnos = respuesta;
        },
        (error) => {
          console.error('Error al obtener alumnos: ', error);
        }
      );
    }
    

    
  }

  generateQRCode(){
    if(this.idCurso) {
      const fechaActual = new Date().toISOString().split('T')[0]; //Fecha en formato YYYY-MM-DD
      const data = `${this.codigoCurso}-${this.seccionCurso}-${fechaActual}`;

      let qr = qrcode(4, 'L');
      qr.addData(data);
      qr.make();
      this.qrDataURL = qr.createDataURL(4);

    }
  }

  ngOnInit() {
    this.generateQRCode();
  }

}
