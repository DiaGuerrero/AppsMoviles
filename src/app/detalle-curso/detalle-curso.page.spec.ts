import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCursoPage } from './detalle-curso.page';
import { ConsumoApiService } from '../service/consumo-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { never, of, throwError } from 'rxjs';
import * as qrcode from 'qrcode-generator';

describe('DetalleCursoPage', () => {
  let component: DetalleCursoPage;
  let fixture: ComponentFixture<DetalleCursoPage>;
  let mockConsumoApiService: any;
  let mockRouter: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockConsumoApiService = jasmine.createSpyObj('ConsumoApiService', ['obtenerAlumnosCurso']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      queryParams: of({}),
      getCurrentNavigation: () => ({
        extras: {
          state: {
            nombre: 'Curso Prueba',
            id: 1,
            codigo: 'C001',
            seccion: 'S001',
            idProfesor: 123
          }
        }
      })
    };

    await TestBed.configureTestingModule({
      declarations: [DetalleCursoPage],
      providers: [
        { provide: ConsumoApiService, useValue: mockConsumoApiService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleCursoPage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar los valores del estado de navegación', () => {
    fixture.detectChanges();

    expect(component.nombreCurso).toBe('Curso Prueba');
    expect(component.idCurso).toBe(1);
    expect(component.codigoCurso).toBe('C001');
    expect(component.seccionCurso).toBe('S001');
    expect(component.idProfesor).toBe(123);
  });

  it('debería cargar los alumnos del curso', () => {
    const mockAlumnos = [
      { id: 1, nombre: 'Alumno 1', matricula: 'A001' },
      { id: 2, nombre: 'Alumno 2', matricula: 'A002' }
    ];
    mockConsumoApiService.obtenerAlumnosCurso.and.returnValue(of(mockAlumnos));

    component.mostrarAlumnos(123, 1);

    expect(mockConsumoApiService.obtenerAlumnosCurso).toHaveBeenCalledWith(123, 1);
    expect(component.alumnos).toEqual(mockAlumnos);
  });

  it('debería manejar errores al cargar los alumnos', () => {
    spyOn(console, 'error');
    mockConsumoApiService.obtenerAlumnosCurso.and.returnValue(throwError('Error de servicio'));

    component.mostrarAlumnos(123, 1);

    expect(mockConsumoApiService.obtenerAlumnosCurso).toHaveBeenCalledWith(123, 1);
    expect(console.error).toHaveBeenCalledWith('Error al obtener alumnos: ', 'Error de servicio');
  });
});
