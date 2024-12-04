import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { ConsumoApiService } from '../service/consumo-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs'; // Para mockear respuestas y errores
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let mockConsumoApiService: any;
  let mockRouter: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockConsumoApiService = jasmine.createSpyObj('ConsumoApiService', ['obtenerCursosProfesor']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      queryParams: of({
        state: { nombre: 'Profesor Prueba', id: 1 }
      })
    };

    await TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [
        { provide: ConsumoApiService, useValue: mockConsumoApiService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los cursos del profesor al inicializar', () => {
    const mockCursos = [
      { id: 1, nombre: 'Curso 1', codigo: 'C001', seccion: 'S001' },
      { id: 2, nombre: 'Curso 2', codigo: 'C002', seccion: 'S002' }
    ];
    mockConsumoApiService.obtenerCursosProfesor.and.returnValue(of(mockCursos));

    component.profesorId = 1;
    component.ngOnInit();

    expect(mockConsumoApiService.obtenerCursosProfesor).toHaveBeenCalledWith(1);
    expect(component.cursos).toEqual(mockCursos);
  });

  it('debería manejar errores al cargar los cursos', () => {
    spyOn(console, 'error');
    mockConsumoApiService.obtenerCursosProfesor.and.returnValue(throwError('Error de servicio'));

    component.profesorId = 1;
    component.ngOnInit();

    expect(mockConsumoApiService.obtenerCursosProfesor).toHaveBeenCalledWith(1);
    expect(console.error).toHaveBeenCalledWith('Error al obtener cursos: ', 'Error de servicio');
  });

  it('debería navegar al detalle del curso con los datos correctos', () => {
    const curso = { nombre: 'Curso 1', id: 1, codigo: 'C001', seccion: 'S001' };
    const navigationExtras = {
      state: {
        nombre: curso.nombre,
        id: curso.id,
        codigo: curso.codigo,
        seccion: curso.seccion,
        idProfesor: component.profesorId
      }
    };

    component.profesorId = 1;
    component.verDetalle(curso.nombre, curso.id, curso.codigo, curso.seccion);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/detalle-curso'], navigationExtras);
  });

  it('debería mostrar un error si no se encuentra el ID del profesor', () => {
    spyOn(console, 'error');
    component.profesorId = null;

    component.ngOnInit();

    expect(console.error).toHaveBeenCalledWith('ID del profesor no disponible');
  });
});
