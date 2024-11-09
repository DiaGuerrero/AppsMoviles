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

  constructor(private httpClient: HttpClient) { }

  public obtenerCursosPorProfesor(profesorId : number): Observable<any>{
    return this.httpClient.get(this.apiURL + 'profesores/' + profesorId + '/cursos', this.httpOptions)
  }

  // '/profesores/<int:profesor_id>/cursos/<int:curso_id>/alumnos'
  public obtenerAlumnosPorCursoPorProfesor(profesorId : number, cursoId : number): Observable<any>{
    return this.httpClient.get(this.apiURL + 'profesores/' + profesorId + '/cursos/' + cursoId + '/alumnos', this.httpOptions)
  }
  
}
