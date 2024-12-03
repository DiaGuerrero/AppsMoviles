import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ConsumoApiService } from '../service/consumo-api.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private router: Router, private camera: Camera, private consumoApi: ConsumoApiService) { }
  navegar(){
    this.router.navigate(['/cont-alumno'])
  }

  camara(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData es una cadena que contiene la ruta del archivo
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
      }, (err) => {
      // Manejo de errores
      });
  }

  ngOnInit() : void {
  }

}
