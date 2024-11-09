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

  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }


  getPosts():Observable<any>{
    return this.httpClient.get(this.apiURL+'/posts').pipe(
      retry(3)
    );
  }
}
