import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { ConsumoApiService } from '../service/consumo-api.service';// import del servicio consumoAPI que generamos

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  now = new Date();

  testVariable: string = "";
  user = "";
  fecha = this.now.toLocaleString();

  //Crear un listado de cursos(un arreglo vacio)
  cursos : any[] = [];


  constructor(private activateroute: ActivatedRoute, private consumoApi: ConsumoApiService, private router: Router) {
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.user = this.router.getCurrentNavigation()?.extras.state?.['id'];
        console.log(this.router.getCurrentNavigation()?.extras.state?.['pass']);
      }
    });
  }

  // Crear metodo para consumir el service
  getPostServices() {
    this.consumoApi.obtenerCursosPorProfesor(1).subscribe((respuesta)=> {
      this.cursos = respuesta;
    })
  }
  
  verDetalle(nombreCurso: string, idCurso: number, codigoCurso: string, seccionCurso: string) {
    let setData: NavigationExtras = {
      state: {
        nombre: nombreCurso,
        id: idCurso,
        codigo: codigoCurso,
        seccion: seccionCurso
      }
    };

    this.router.navigate(['/detalle-curso'], setData)
  }
  
  //Metodo que permite navergar como si fuera un HREF
  navegar(){
    this.router.navigate(['/home']);
  }
  
  ngOnInit(): void {
    this.getPostServices();
  }
  
  
}
