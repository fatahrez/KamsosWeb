import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) { }

  private formatError(error: any){
    return throwError(error.json())
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any>{
    return this.http.get(`${environment.api_url}${path}`, {params})
    .pipe(catchError(this.formatError));
  }

  post(path: string, body: Object = {}):  Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body)).pipe(
        catchError(this.formatError)
    );  
  }
}
