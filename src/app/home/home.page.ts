import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  //Metodo que permite navergar como si fuera un HREF
  navegar(){
    this.router.navigate(['/profesor']);
  }

  usuario = new FormGroup({

    user: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  
  });

  navegarProfesor(){

    let setData: NavigationExtras = {

      state: {
        id: this.usuario.value.user,
        user: this.usuario.value.pass
      }
    };

    this.router.navigate(['/profesor'], setData)

  };

  navegarAlumno(){

    let setData: NavigationExtras = {

      state: {
        id: this.usuario.value.user,
        user: this.usuario.value.pass
      }
    };

    this.router.navigate(['/alumno'], setData)

  }

}
