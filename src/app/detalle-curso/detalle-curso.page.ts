import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as qrcode from 'qrcode-generator';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {
  
  nombreCurso = "";
  idCurso = "";
  codigoCurso = "";
  seccionCurso = "";

  alumnos = [
    {rut:"1-1", nombre:"Juan Pablo", estado:"Presente"},
    {rut:"1-2", nombre:"Gianna Pinzon", estado:"Presente"},
    {rut:"1-3", nombre:"Diana Guerrero", estado:"Presente"},
    {rut:"1-4", nombre:"Jeremy Perez", estado:"Presente"}
  ];
  qrDataURL: string | undefined;

  constructor(private activateroute: ActivatedRoute, private router: Router) { 
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombreCurso = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.idCurso = this.router.getCurrentNavigation()?.extras.state?.['id'];
        this.codigoCurso = this.router.getCurrentNavigation()?.extras.state?.['codigo'];
        this.seccionCurso = this.router.getCurrentNavigation()?.extras.state?.['seccion'];
      }
    });
  }

  generateQRCode(){
    if(this.idCurso) {
      const fechaActual = new Date().toISOString().split('T')[0]; //Fecha en formato YYYY-MM-DD
      const data = `${this.codigoCurso} ${this.seccionCurso} ${fechaActual}`;

      let qr = qrcode(4, 'L');
      qr.addData(data);
      qr.make();
      this.qrDataURL = qr.createDataURL(4);

    }
  }

  ngOnInit() {
  }

}
