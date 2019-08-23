import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private apiService: ApiService) { }

  add(vetId): Observable<RequestService>{
    return this.apiService.post(
      `/requestvet/`,
      {
        ordervet: { vetId }
      }).pipe(map(data => data.ordervet));
  }

  destroy(requestId){
    return this.apiService.delete(`/vetrequest/${requestId}`);
  }

}
