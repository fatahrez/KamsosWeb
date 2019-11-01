import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Request} from '../models';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private apiService: ApiService) { }

  add(slug): Observable<Request> {
    return this.apiService.post(
      `/vets/${slug}/request`
      ).pipe(map(data => data.ordervet));
  }

  destroy(requestId) {
    return this.apiService.delete(`/vetrequest/${requestId}`);
  }

}
