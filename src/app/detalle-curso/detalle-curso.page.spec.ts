import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCursoPage } from './detalle-curso.page';
import { ConsumoApiService } from '../service/consumo-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('DetalleCursoPage', () => {
  let component: DetalleCursoPage;
  let fixture: ComponentFixture<DetalleCursoPage>;
  let ConsumoApiServiceSpy: jasmine.SpyObj<ConsumoApiService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    ConsumoApiServiceSpy = jasmine.createSpyObj('ConsumoApiService', ['obtenerAlumnosCurso']);
    mockRouter = jasmine.createSpyObj('Router', ['getCurrentNavigation']);
    mockRouter.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          nombre: 'Curso de prueba',
          id: 1,
          codigo: 'ABC123',
          seccion: 'A',
          idProfesor: 1
        },
      },
    } as any);

    TestBed.configureTestingModule({
      declarations: [DetalleCursoPage],
      providers: [
        { provide: ConsumoApiService, useValue: ConsumoApiServiceSpy },        
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, 
          useValue: { queryParams: of({}) } 
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleCursoPage);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with course data from router state', () => {
    fixture.detectChanges();
    expect(component.nombreCurso).toBe('Curso de prueba');
    expect(component.idCurso).toBe(123);
    expect(component.codigoCurso).toBe('ABC123');
    expect(component.seccionCurso).toBe('01');
  });
});
