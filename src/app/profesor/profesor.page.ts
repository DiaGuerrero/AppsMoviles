import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private router: Router) {}
  //Metodo que permite navergar como si fuera un HREF
  navegar(){
    this.router.navigate(['/cont-profesor']);
  }

  ngOnInit() {
  }

}
