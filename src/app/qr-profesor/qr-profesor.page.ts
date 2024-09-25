import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-profesor',
  templateUrl: './qr-profesor.page.html',
  styleUrls: ['./qr-profesor.page.scss'],
})
export class QrProfesorPage implements OnInit {
  curso: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.curso = params['curso'];
      console.log('Curso seleccionado:', this.curso);
    });
  }
}
