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

  //Crear un listado de cursos
  cursos = [
    {id: 1,nombre: 'POO', codigo: 'APY6565', seccion: '017V'},
    {id: 2,nombre: 'APP', codigo: 'PGY6464', seccion: '018V'},
    {id: 3,nombre: 'CALIDAD', codigo: 'CSY6565', seccion: '019V'}
  ]

  nombre: string | undefined;
  userHome: any;
  titulo: string = "";
  tituloUno: any
  value = 'dcares';
  message: any;

  constructor(private activateroute: ActivatedRoute, private consumoApi: ConsumoApiService, private router: Router) {
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.user = this.router.getCurrentNavigation()?.extras.state?.['id'];
        console.log(this.router.getCurrentNavigation()?.extras.state?.['pass']);
      }
    });
  }

  // Crear metodo para consumir el servive
  getPostServices() {
    this.consumoApi.getPosts().subscribe((res)=> {
      this.testVariable = res[65].title;
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
  
  // Metodo para Mostrar
  obtenerData(){
    this.consumoApi.getPosts().subscribe((res)=>{
      this.titulo = res;
      console.log(res);
    });
  }
}
