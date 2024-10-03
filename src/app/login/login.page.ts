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

  async presentAlert(p0: string, error: any) {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }


  //metodo que permite ir al home(en vez de routerLink que es como un HREF)
  navegar(){
    this.router.navigate(['/home']);
  }
  usuarioProfesor = 'dcares';
  passProfesor = '123456';

  usuarioAlumno = 'jeremy';
  passAlumno = '123456';

  usuario = new FormGroup({

    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),  
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    
   });
  
   navegarExtras(){
  
    let setData: NavigationExtras = {
  
     state: {  
      id: this.usuario.value.user,  
      user: this.usuario.value.pass  
     }  
    };
    
    try{

      if(this.usuario.value.user === this.usuarioProfesor && this.usuario.value.pass === this.passProfesor){
        // cambia el estado del authService...
        this.authService.login();
        this.router.navigate(['/profesor'],setData);
      }else if(this.usuario.value.user === this.usuarioAlumno && this.usuario.value.pass === this.passAlumno){
        // cambia el estado del authService
        this.authService.login();
        this.router.navigate(['/alumno'],setData);
      }
        else{
          this.presentAlert("Error Login", "Usuario")
      }
    } catch(error:any){
      this.presentAlert("Error Login", error)
    }
    
  
   }

   

  ngOnInit() {
  }

}