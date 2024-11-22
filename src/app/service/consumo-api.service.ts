import { Injectable } from '@angular/core'; // se crea con el comando ionic g service service/consumiApi
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; // importamos las ultimas las siguiente 3 lineas de codigo
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  //apiURL = 'https://jsonplaceholder.typicode.com';
  apiURL : string = 'http://localhost:5000/';
  private cursoData : any;

  constructor(private httpClient: HttpClient) { }

  login(correo: string, password: string): Observable<any> {
    const url = `${this.apiURL}/login`;
    return this.httpClient.post(url, {correo, password}, this.httpOptions)
  }

  obtenerProfesores(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/profesores`, this.httpOptions)
  }

  obtenerCursosProfesor(profesorId: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/profesores/${profesorId}/cursos`, this.httpOptions)
  }

  obtenerAlumnosCurso(profesorId: number, cursoId: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/profesores/${profesorId}/cursos/${cursoId}/alumnos`, this.httpOptions)
  }

  registrarAsistencia(alumnoId: number, codigo: string, seccion: string, fecha: string): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/registrar_asistencia`, {alumnoId, codigo, seccion, fecha}, this.httpOptions)
  }


  //---------------->Metodos Propios<----------------

  // '/profesores/<int:profesor_id>/cursos/<int:curso_id>/alumnos'
  public obtenerAlumnosPorCursoPorProfesor(profesorId : number, cursoId : number): Observable<any>{
    return this.httpClient.get(this.apiURL + 'profesores/' + profesorId + '/cursos/' + cursoId + '/alumnos', this.httpOptions)
  }

  getCursos(id_profe : string): Observable<any>{
    const url = `${this.apiURL}/profesores/${id_profe}/cursos`;
    return this.httpClient.get(url, this.httpOptions)
  }

  // guardamos los datos de los cursos
  setCursoData(data:any):void
  {
    this.cursoData = data;
  }
  // obtenemos los datos de los cursos
  getCursoData():any
  {
    return this.cursoData;
  }
  
}
