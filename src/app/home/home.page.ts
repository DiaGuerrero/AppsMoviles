import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { ConsumoApiService } from '../service/consumo-api.service';// import del servicio consumoAPI que generamos

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nombre: string | undefined;
  userHome: any;
  titulo: string = "";
  tituloUno: any
  value = 'dcares';
  message: any;

  constructor(private consumoApi: ConsumoApiService, private router: Router) {}
  //Metodo que permite navergar como si fuera un HREF
  navegar(){
    this.router.navigate(['/home']);
  }
  
  ngOnInit(): void {
    this.obtenerData();
  }
  
  // Metodo para Mostrar
  obtenerData(){
    this.consumoApi.getPosts().subscribe((res)=>{
      this.titulo = res;
      console.log(res);
    });
  }
}
