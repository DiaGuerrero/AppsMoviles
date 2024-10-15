import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { ConsumoApiService } from '../service/consumo-api.service';// import del servicio que generamos

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string;
  userHome: any;
  tituloUno: any
  value = 'dcares';
  message;

  constructor(private consumoApi: ConsumoApiService, private router: Router) {}
  //Metodo que permite navergar como si fuera un HREF
  navegar(){
    this.router.navigate(['/profesor']);
  }
  // Metodo para Mostrar
  mostrar(){
    this.consumoApi.getPosts().subscribe((res)=>{
      this.message = '' + res[0].tittle;
      console.log(res[0]);
    }, (error)=>{
      console.log(error);
    });
  }
}
