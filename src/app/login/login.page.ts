import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController, private authService: AuthserviceService) { }

  //metodo que permite ir al home(en vez de routerLink que es como un HREF)
  navegar(){
    this.router.navigate(['/home']);
  }

  usuario = new FormGroup({

    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),  
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    
   });
  
   navegarExtras(){
    // la creacion del set de datos
    let setData: NavigationExtras = {
  
     state: {  
      id: this.usuario.value.user,  
      user: this.usuario.value.pass  
     }  
    };
      /* const loginMap: { [key: string]: string} = {
        'profesor:1234': '/home',
        'estudiante:1234': '/alumno'
      }; */
    try{

      /* const userPassKey = `${this.usuario.value.user}:${this.usuario.value.pass}`;
      if (loginMap[userPassKey]) {
        this.router.navigate([loginMap[userPassKey]], setData);
      } else {
        this.presentAlert("Error Login", "Usuario y/o contraseña son incorrectos")
      } */
      
      if(this.usuario.value.user == "docente@gmail.com" && this.usuario.value.pass == "password1"){
        //cambia el estado del authservice...
        this.authService.login();
        this.router.navigate(['/home'], setData);
      } else if(this.usuario.value.user == "alumno@gmail.com" && this.usuario.value.pass == "password2"){
        //cambia el estado del authservice...
        this.authService.login();
        this.router.navigate(['/alumno'], setData);
      } else {
        this.presentAlert("Error Login", "Usuario y/o contraseña son incorrectos");
      }

    } catch(error:any){
      this.presentAlert("Error Login", error)
    }
  
   }

   async presentAlert(titulo: string, mensaje: any) {
    const alert = await this.alertController.create({
      header: 'Info Login',
      subHeader: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  } 

  ngOnInit() : void {
    //this.navegar()
  }

}