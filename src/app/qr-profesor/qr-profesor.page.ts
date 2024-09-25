import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qr-profesor',
  templateUrl: './qr-profesor.page.html',
  styleUrls: ['./qr-profesor.page.scss'],
})
export class QrProfesorPage implements OnInit {
  curso: string | null = null;
  alumnosAsistentes: { nombre: string }[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  navegar(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.curso = params['curso'];
      console.log('Curso seleccionado:', this.curso);
    });

    this.alumnosAsistentes = [
      { nombre: 'Jeremy Pérez' },
      { nombre: 'Rosa Melano' },
      { nombre: 'Elbert Galarga' },
      { nombre: 'María Humpajote' },
      { nombre: 'Jonny Melabo' },
      { nombre: 'Xansho Kuliao' }
    ];
  }
}
