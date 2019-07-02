import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private setHeader(): HttpHeaders{
    let headersConfig = {
      'Content-Type': 'app;ication/json',
      'Accept': 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }
}
